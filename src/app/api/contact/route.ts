import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { sendContactEmail, sendConfirmationEmail } from '@/lib/email';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().optional(),
  city: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received contact form data:', body);
    const validatedData = contactSchema.parse(body);

    // Save inquiry to database (with error handling)
    let inquiry = null;
    try {
      inquiry = await prisma.inquiry?.create({
        data: {
          name: validatedData.name,
          email: validatedData.email,
          phone: validatedData.phone,
          service: validatedData.service || null,
          city: validatedData.city || null,
          message: validatedData.message,
        },
      });
      console.log('Inquiry saved to database:', inquiry?.id);
    } catch (dbError) {
      console.error('Database save failed, continuing with email only:', dbError);
      // Continue without database save
    }

    // Send email notifications
    try {
      console.log('Attempting to send emails...');
      console.log('SMTP Config:', {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER,
        hasPassword: !!process.env.SMTP_PASS
      });
      
      // Send notification email to business
      const emailResult = await sendContactEmail(validatedData);
      console.log('Business email result:', emailResult);
      
      // Send confirmation email to customer
      const confirmationResult = await sendConfirmationEmail(validatedData);
      console.log('Customer email result:', confirmationResult);
      
      console.log('Email notifications sent:', {
        businessEmail: emailResult.success ? 'Success' : 'Failed',
        customerEmail: confirmationResult.success ? 'Success' : 'Failed',
        inquiryId: inquiry?.id || 'Not saved to database',
      });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json(
      { message: 'Inquiry submitted successfully', id: inquiry?.id || 'email-only' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof z.ZodError) {
      const firstError = error.issues[0];
      console.log('Validation error:', firstError.message);
      return NextResponse.json(
        { error: firstError.message, details: error.issues },
        { status: 400 }
      );
    }

    console.log('Unknown error type:', typeof error, error);
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
