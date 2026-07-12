import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// TODO: Integrations pending
// - Email delivery via Resend
// - CRM/webhook forwarding
// - Supabase database storage
// - Google Sheets logging
// - SMS notification (Twilio)
// - Photo upload storage (S3/Cloudinary)

const leadSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  city: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  propertyType: z.string().optional(),
  urgency: z.string().optional(),
  description: z.string().min(1, "Description is required"),
  contactPreference: z.string().optional(),
  bestTime: z.string().optional(),
  photos: z.string().optional(),
  consent: z.boolean().optional(),
}).refine(
  (data) => data.phone || data.email,
  { message: "Phone or email is required", path: ["phone"] }
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = leadSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: result.error.issues },
        { status: 400 }
      );
    }

    // Mock lead storage — TODO: replace with real DB
    console.log("Lead received:", JSON.stringify(result.data, null, 2));

    return NextResponse.json({
      success: true,
      message: "Quote request received. We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("Lead API error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
