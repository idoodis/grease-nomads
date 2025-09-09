import { NextRequest, NextResponse } from 'next/server';

// In-memory team storage for demo
const team = [
  {
    id: 't1',
    name: 'Mike Rodriguez',
    role: 'Lead Mechanic',
    bio: '15+ years experience in automotive repair and diagnostics',
  },
  {
    id: 't2',
    name: 'Sarah Johnson',
    role: 'Service Manager',
    bio: 'Expert in customer service and automotive technology',
  },
  {
    id: 't3',
    name: 'David Chen',
    role: 'Diagnostic Specialist',
    bio: 'Certified in advanced diagnostic systems and electrical repair',
  },
];

// GET - list team
export async function GET() {
  return NextResponse.json(team);
}

// POST - add member
export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const member = { id: Date.now().toString(), ...payload };
    team.push(member);
    return NextResponse.json(member, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to add member' },
      { status: 500 }
    );
  }
}

// PUT - update member
export async function PUT(request: NextRequest) {
  try {
    const payload = await request.json();
    const index = team.findIndex((m) => m.id === payload.id);
    if (index === -1) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
    team[index] = payload;
    return NextResponse.json(payload);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update member' },
      { status: 500 }
    );
  }
}

// DELETE - remove member
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json(
        { error: 'Member ID required' },
        { status: 400 }
      );
    }
    const index = team.findIndex((m) => m.id === id);
    if (index === -1) {
      return NextResponse.json({ error: 'Member not found' }, { status: 404 });
    }
    team.splice(index, 1);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete member' },
      { status: 500 }
    );
  }
}
