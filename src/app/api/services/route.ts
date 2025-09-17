import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';

// Helper: map Prisma Service to legacy API response shape expected by UI
function mapServiceToApi(service: {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  priceUnit: string;
}) {
  return {
    id: service.id,
    name: service.name,
    description: service.description,
    price: String(service.basePrice),
  };
}

// GET - Fetch all services from Prisma
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      orderBy: { updatedAt: 'desc' },
    });
    return NextResponse.json(services.map(mapServiceToApi));
  } catch (_e) {
    return NextResponse.json([], { status: 200 });
  }
}

// POST - Create new service (accepts legacy { name, description, price })
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name: string = body.name;
    const description: string = body.description ?? '';
    const priceInput = body.price ?? '0';
    const basePrice = Number.parseInt(String(priceInput), 10) || 0;
    const priceUnit = '$';
    const longDescription = body.longDescription ?? description;
    const slug = (body.slug || name || '')
      .toString()
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');

    const created = await prisma.service.create({
      data: {
        name,
        slug: slug || `service-${Date.now()}`,
        description,
        longDescription,
        basePrice,
        priceUnit,
        isFeatured: Boolean(body.isFeatured) || false,
      },
    });

    // Revalidate relevant paths
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath('/sitemap.xml');

    return NextResponse.json(mapServiceToApi(created), { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to create service' },
      { status: 500 }
    );
  }
}

// PUT - Update service by id (accepts legacy { id, name, description, price })
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id: string = body.id;
    if (!id) {
      return NextResponse.json({ error: 'Service id required' }, { status: 400 });
    }

    const data: any = {};
    if (typeof body.name === 'string') data.name = body.name;
    if (typeof body.description === 'string') data.description = body.description;
    if (body.longDescription != null) data.longDescription = String(body.longDescription);
    if (body.price != null) data.basePrice = Number.parseInt(String(body.price), 10) || 0;
    if (body.priceUnit != null) data.priceUnit = String(body.priceUnit);
    if (body.isFeatured != null) data.isFeatured = Boolean(body.isFeatured);
    if (body.slug != null) {
      data.slug = String(body.slug)
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-');
    }

    const updated = await prisma.service.update({ where: { id }, data });

    // Revalidate relevant paths
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath('/sitemap.xml');

    return NextResponse.json(mapServiceToApi(updated));
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update service' },
      { status: 500 }
    );
  }
}

// DELETE - Delete service by id
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

    await prisma.service.delete({ where: { id } });

    // Revalidate relevant paths
    revalidatePath('/');
    revalidatePath('/services');
    revalidatePath('/sitemap.xml');

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete service' },
      { status: 500 }
    );
  }
}
