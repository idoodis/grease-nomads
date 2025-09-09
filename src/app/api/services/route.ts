import { NextRequest, NextResponse } from 'next/server';

// In-memory storage for demo (in production, use database)
const services = [
  {
    id: '1',
    name: 'Routine Maintenance',
    description:
      'Keep your vehicle running smoothly with our comprehensive maintenance services including oil changes, filter replacements, and fluid checks.',
    price: '89',
    icon: 'maintenance',
  },
  {
    id: '2',
    name: 'Diagnostic Services',
    description:
      'Expert diagnosis of automotive issues with detailed reports and transparent pricing. We use advanced diagnostic equipment.',
    price: '49',
    icon: 'diagnosis',
  },
  {
    id: '3',
    name: 'Emergency Repairs',
    description:
      '24/7 emergency roadside assistance when you need it most. We come to you anywhere in our service area.',
    price: '99',
    icon: 'emergency',
  },
  {
    id: '4',
    name: 'Performance Modifications',
    description:
      "Enhance your vehicle's performance with ECU tuning, exhaust upgrades, intake modifications, and custom engine work.",
    price: '299',
    icon: 'performance',
  },
  {
    id: '5',
    name: 'Pre-Purchase Inspection',
    description:
      "Comprehensive vehicle inspection before you buy. Get a detailed report on the vehicle's condition and potential issues.",
    price: '149',
    icon: 'inspection',
  },
];

// GET - Fetch all services
export async function GET() {
  return NextResponse.json(services);
}

// POST - Create new service
export async function POST(request: NextRequest) {
  try {
    const newService = await request.json();
    const service = {
      id: Date.now().toString(),
      ...newService,
    };
    services.push(service);
    return NextResponse.json(service, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

// PUT - Update service
export async function PUT(request: NextRequest) {
  try {
    const updatedService = await request.json();
    const index = services.findIndex((s) => s.id === updatedService.id);

    if (index === -1) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    services[index] = updatedService;
    return NextResponse.json(updatedService);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Service ID required' },
        { status: 400 }
      );
    }

    const index = services.findIndex((s) => s.id === id);

    if (index === -1) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }

    services.splice(index, 1);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
