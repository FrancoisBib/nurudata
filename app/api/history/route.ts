import { NextRequest, NextResponse } from 'next/server';

interface ConversionHistoryItem {
  id: string;
  fileName: string;
  templateName: string;
  status: 'completed' | 'failed';
  createdAt: string;
  completedAt?: string;
  result?: any;
}

interface HistoryResponse {
  success: boolean;
  history: ConversionHistoryItem[];
  total: number;
}

export async function GET(request: NextRequest): Promise<NextResponse<HistoryResponse>> {
  try {
    // Mock conversion history data
    const mockHistory: ConversionHistoryItem[] = [
      {
        id: 'job_1234567890_abc123',
        fileName: 'data.csv',
        templateName: 'Standard JSON Template',
        status: 'completed',
        createdAt: '2023-11-26T10:00:00Z',
        completedAt: '2023-11-26T10:05:00Z',
        result: { records: 150, fields: ['name', 'email', 'age'] },
      },
      {
        id: 'job_1234567891_def456',
        fileName: 'inventory.xlsx',
        templateName: 'Inventory Template',
        status: 'completed',
        createdAt: '2023-11-25T15:30:00Z',
        completedAt: '2023-11-25T15:45:00Z',
        result: { records: 200, fields: ['item', 'quantity', 'price'] },
      },
      {
        id: 'job_1234567892_ghi789',
        fileName: 'users.json',
        templateName: 'User Data Template',
        status: 'failed',
        createdAt: '2023-11-24T09:15:00Z',
        result: null,
      },
    ];

    const response: HistoryResponse = {
      success: true,
      history: mockHistory,
      total: mockHistory.length,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('History retrieval error:', error);
    return NextResponse.json(
      { success: false, history: [], total: 0 },
      { status: 500 }
    );
  }
}