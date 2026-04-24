import { NextRequest, NextResponse } from 'next/server';
import { contactFormSchema } from '@/lib/validations';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    // In production, you would send an email here using Resend or another service
    // For now, we'll just log the data and return success
    console.log('Contact form submission:', validatedData);

    // Example with Resend (uncomment and add your API key to use):
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: [siteConfig.email],
    //   subject: `New Contact: ${validatedData.subject}`,
    //   react: ContactEmailTemplate(validatedData),
    // });

    return NextResponse.json({ success: true, message: 'Message sent successfully' });
  } catch (error) {
    if (error instanceof Error && error.name === 'ZodError') {
      return NextResponse.json(
        { error: 'Invalid form data', details: error.errors },
        { status: 400 }
      );
    }

    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
