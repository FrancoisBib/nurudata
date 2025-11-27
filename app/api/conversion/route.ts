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

interface ConversionTriggerRequest {
  fileId: string;
  templateId: string;
}

interface ConversionTriggerResponse {
  success: boolean;
  jobId?: string;
  message: string;
}

interface ConversionStatusResponse {
  success: boolean;
  jobId: string;
  status: 'pending' | 'processing' | 'completed' | 'failed';
  progress?: number;
  result?: any;
  message?: string;
}

// Mock in-memory store for conversion jobs (in production, use database)
const conversionJobs = new Map<string, { status: string; progress: number; result?: any }>();

export async function POST(request: NextRequest): Promise<NextResponse<ConversionTriggerResponse>> {
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

    // Check conversion limits
    const conversionLimit = user.plan === 'basic' ? 10 : null;
    if (conversionLimit !== null && user.monthlyConversions >= conversionLimit) {
      return NextResponse.json(
        { success: false, message: 'Monthly conversion limit exceeded. Upgrade to Pro for unlimited conversions.' },
        { status: 429 }
      );
    }

    // Check credits (assume conversions cost 2 credits)
    if (user.credits < 2) {
      return NextResponse.json(
        { success: false, message: 'Insufficient credits. Please purchase more credits.' },
        { status: 402 }
      );
    }

    const body: ConversionTriggerRequest = await request.json();
    const { fileId, templateId } = body;

    if (!fileId || !templateId) {
      return NextResponse.json(
        { success: false, message: 'fileId and templateId are required' },
        { status: 400 }
      );
    }

    // Generate unique job ID
    const jobId = `job_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Mock calling n8n backend - simulate starting conversion
    conversionJobs.set(jobId, { status: 'pending', progress: 0 });

    // Deduct credits and increment monthly conversions
    user.credits -= 2;
    user.monthlyConversions += 1;

    // Simulate async processing (in real app, this would be handled by a queue/worker)
    setTimeout(() => {
      conversionJobs.set(jobId, { status: 'processing', progress: 50 });
      setTimeout(() => {
        conversionJobs.set(jobId, {
          status: 'completed',
          progress: 100,
          result: { convertedData: 'Mock converted JSON data' }
        });
      }, 2000);
    }, 1000);

    const response: ConversionTriggerResponse = {
      success: true,
      jobId,
      message: 'Conversion job started successfully',
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Conversion trigger error:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse<ConversionStatusResponse>> {
  try {
    const { searchParams } = new URL(request.url);
    const jobId = searchParams.get('id');

    if (!jobId) {
      return NextResponse.json(
        { success: false, jobId: '', status: 'failed', message: 'Job ID is required' },
        { status: 400 }
      );
    }

    const job = conversionJobs.get(jobId);
    if (!job) {
      return NextResponse.json(
        { success: false, jobId, status: 'failed', message: 'Job not found' },
        { status: 404 }
      );
    }

    const response: ConversionStatusResponse = {
      success: true,
      jobId,
      status: job.status as 'pending' | 'processing' | 'completed' | 'failed',
      progress: job.progress,
      result: job.result,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Conversion status error:', error);
    return NextResponse.json(
      { success: false, jobId: '', status: 'failed', message: 'Internal server error' },
      { status: 500 }
    );
  }
}