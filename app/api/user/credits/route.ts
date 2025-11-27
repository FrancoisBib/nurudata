import { NextRequest, NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { users } from '@/lib/users';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface CreditsResponse {
  credits: number;
  plan: string;
  monthlyConversions: number;
  conversionLimit: number | null; // null for unlimited
}

interface DeductCreditsRequest {
  amount: number;
}

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

export async function GET(request: NextRequest) {
  try {
    const user = getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    checkAndResetMonthlyUsage(user);

    const conversionLimit = user.plan === 'basic' ? 10 : null; // Basic: 10/month, Pro: unlimited

    const response: CreditsResponse = {
      credits: user.credits,
      plan: user.plan,
      monthlyConversions: user.monthlyConversions,
      conversionLimit,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Credits check error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const user = getAuthenticatedUser(request);
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body: DeductCreditsRequest = await request.json();
    const { amount } = body;

    if (!amount || amount <= 0) {
      return NextResponse.json({ error: 'Invalid amount' }, { status: 400 });
    }

    checkAndResetMonthlyUsage(user);

    // Check conversion limits
    const conversionLimit = user.plan === 'basic' ? 10 : null;
    if (conversionLimit !== null && user.monthlyConversions >= conversionLimit) {
      return NextResponse.json({ error: 'Monthly conversion limit exceeded' }, { status: 429 });
    }

    // Check credits
    if (user.credits < amount) {
      return NextResponse.json({ error: 'Insufficient credits' }, { status: 402 });
    }

    // Deduct credits and increment conversions
    user.credits -= amount;
    user.monthlyConversions += 1;

    return NextResponse.json({
      success: true,
      credits: user.credits,
      monthlyConversions: user.monthlyConversions,
    }, { status: 200 });
  } catch (error) {
    console.error('Credits deduction error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}