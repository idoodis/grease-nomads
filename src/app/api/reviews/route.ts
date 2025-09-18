import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { prisma } from '@/lib/db';

function mapReviewToApi(review: {
  id: string;
  authorName: string;
  rating: number;
  body: string;
  publishedAt: Date;
  city: string | null;
}) {
  return {
    id: review.id,
    authorName: review.authorName,
    rating: review.rating,
    body: review.body,
    publishedAt: review.publishedAt.toISOString(),
    city: review.city ?? undefined,
  };
}

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { publishedAt: 'desc' },
      take: 12,
    });
    return NextResponse.json(reviews.map(mapReviewToApi));
  } catch (_e) {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const created = await prisma.review.create({
      data: {
        authorName: String(body.authorName || 'Anonymous'),
        rating: Math.max(1, Math.min(5, Number.parseInt(String(body.rating ?? 5), 10) || 5)),
        body: String(body.body || ''),
        city: body.city ? String(body.city) : null,
        publishedAt: body.publishedAt ? new Date(body.publishedAt) : new Date(),
      },
    });

    revalidatePath('/');
    return NextResponse.json(mapReviewToApi(created), { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create review' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const id: string = body.id;
    if (!id) {
      return NextResponse.json({ error: 'Review id required' }, { status: 400 });
    }

    const data: any = {};
    if (body.authorName != null) data.authorName = String(body.authorName);
    if (body.rating != null) data.rating = Math.max(1, Math.min(5, Number.parseInt(String(body.rating), 10) || 5));
    if (body.body != null) data.body = String(body.body);
    if (body.city != null) data.city = body.city ? String(body.city) : null;
    if (body.publishedAt != null) data.publishedAt = new Date(body.publishedAt);

    const updated = await prisma.review.update({ where: { id }, data });
    revalidatePath('/');
    return NextResponse.json(mapReviewToApi(updated));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update review' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'Review ID required' }, { status: 400 });
    }

    await prisma.review.delete({ where: { id } });
    revalidatePath('/');
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete review' }, { status: 500 });
  }
}


