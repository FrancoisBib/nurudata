import { NextRequest, NextResponse } from 'next/server';

interface Template {
  id: string;
  name: string;
  description: string;
  schema: object;
  createdAt: string;
}

interface TemplatesResponse {
  success: boolean;
  templates: Template[];
  total: number;
}

export async function GET(request: NextRequest): Promise<NextResponse<TemplatesResponse>> {
  try {
    // Mock available JSON templates
    const mockTemplates: Template[] = [
      {
        id: 'template_1',
        name: 'Standard JSON Template',
        description: 'Basic template for converting CSV/Excel data to JSON',
        schema: {
          type: 'object',
          properties: {
            records: { type: 'array' },
            metadata: { type: 'object' },
          },
        },
        createdAt: '2023-11-20T08:00:00Z',
      },
      {
        id: 'template_2',
        name: 'Inventory Template',
        description: 'Template for inventory management data',
        schema: {
          type: 'object',
          properties: {
            items: { type: 'array' },
            totalValue: { type: 'number' },
          },
        },
        createdAt: '2023-11-21T10:30:00Z',
      },
      {
        id: 'template_3',
        name: 'User Data Template',
        description: 'Template for user profile data conversion',
        schema: {
          type: 'object',
          properties: {
            users: { type: 'array' },
            count: { type: 'number' },
          },
        },
        createdAt: '2023-11-22T14:15:00Z',
      },
    ];

    const response: TemplatesResponse = {
      success: true,
      templates: mockTemplates,
      total: mockTemplates.length,
    };

    return NextResponse.json(response, { status: 200 });
  } catch (error) {
    console.error('Templates retrieval error:', error);
    return NextResponse.json(
      { success: false, templates: [], total: 0 },
      { status: 500 }
    );
  }
}