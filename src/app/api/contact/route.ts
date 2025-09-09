import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  service: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = contactSchema.parse(body);

    // Save inquiry to database
    const inquiry = await prisma.inquiry.create({
      data: {
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        service: validatedData.service || null,
        city: validatedData.city || null,
        message: validatedData.message,
      },
    });

    // TODO: Send email notification if EMAIL_PROVIDER is configured
    // For now, we'll just log it
    console.log('New inquiry received:', {
      id: inquiry.id,
      name: inquiry.name,
      email: inquiry.email,
      service: inquiry.service,
      city: inquiry.city,
    });

    return NextResponse.json(
      { message: 'Inquiry submitted successfully', id: inquiry.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.issues },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
