import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/lib/users';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Helper function to get authenticated user
function getAuthenticatedUser(request: NextRequest) {
  const authHeader = request.headers.get('authorization');
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }

  const token = authHeader.substring(7);

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
    const user = users.find(u => u.id === decoded.userId);
    return user || null;
  } catch (error) {
    return null;
  }
}

// Helper function to check and reset monthly conversions if needed
function checkAndResetMonthlyUsage(user: any) {
  const now = new Date();
  const lastReset = new Date(user.lastResetDate);
  const currentMonth = now.getMonth();
  const lastResetMonth = lastReset.getMonth();

  if (currentMonth !== lastResetMonth) {
    user.monthlyConversions = 0;
    user.lastResetDate = now.toISOString();
  }
}

interface UploadResponse {
  success: boolean;
  message: string;
  fileName?: string;
  fileSize?: number;
}

export async function POST(request: NextRequest): Promise<NextResponse<UploadResponse>> {
  try {
    // Authenticate user
    const user = getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      );
    }

    // Check and reset monthly usage if needed
    checkAndResetMonthlyUsage(user);

    // Check conversion limits (uploads count towards conversions)
    const conversionLimit = user.plan === 'basic' ? 10 : null;
    if (conversionLimit !== null && user.monthlyConversions >= conversionLimit) {
      return NextResponse.json(
        { success: false, message: 'Monthly conversion limit exceeded. Upgrade to Pro for unlimited conversions.' },
        { status: 429 }
      );
    }

    // Check credits (assume uploads cost 1 credit)
    if (user.credits < 1) {
      return NextResponse.json(
        { success: false, message: 'Insufficient credits. Please purchase more credits.' },
        { status: 402 }
      );
    }

    const formData = await request.formData();
    const file = formData.get('file') as File | null;

    if (!file) {
      return NextResponse.json(
        { success: false, message: 'No file provided' },
        { status: 400 }
      );
    }

    // Basic validation
    if (file.size === 0) {
      return NextResponse.json(
        { success: false, message: 'File is empty' },
        { status: 400 }
      );
    }

    // In a real implementation, you would save the file to storage
    // For now, just return success with file info
    const response: UploadResponse = {
      success: true,
      message: 'File uploaded successfully',
      fileName: file.name,
      fileSize: file.size,
    };

    // Deduct credits and increment monthly conversions
    user.credits -= 1;
    user.monthlyConversions += 1;

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}