import { NextResponse } from "next/server";
import { headers } from "next/headers";

import { stripe } from "../../../lib/stripe";
import { getUser } from "@/lib/core/session";

export async function POST(req) {
  try {
    const headersList = await headers();
    const origin = headersList.get("origin");

    const user = await getUser();

    const body = await req.json();
    const {
      patientId,
      patientName,
      doctorId,
      doctorName,
      specialization,
      appointmentDate,
      appointmentTime,
      paymentStatus,
      status,
      price,
    } = body;

    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      customer_email: user?.email,
      line_items: [
        {
          price_data: {
            currency: "usd",

            product_data: {
              name: `Appointment with Dr. ${doctorName}`,
            },

            unit_amount: Number(price) * 100,
          },

          quantity: 1,
        },
      ],

      metadata: {
        patientId,
        patientName,
        doctorId,
        doctorName,
        specialization,
        appointmentDate,
        appointmentTime,
        paymentStatus,
        status,
        price,
      },
      mode: "payment",
      success_url: `${origin}/find-doctors/payment-success?session_id={CHECKOUT_SESSION_ID}&appointmentId=${patientId}`,
    });
    return NextResponse.json({
      url: session.url,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err.message },
      { status: err.statusCode || 500 },
    );
  }
}
