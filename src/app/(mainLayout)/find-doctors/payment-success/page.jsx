import { createAppointment, createPayment } from "@/lib/Actions/patient/action";
import { stripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";
import { HiCheckCircle } from "react-icons/hi";

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id)
    throw new Error("Please provide a valid session_id (`cs_test_...`)");

  const {
    status,
    metadata,
    customer_details: { email: customerEmail },
  } = await stripe.checkout.sessions.retrieve(session_id, {
    expand: ["line_items", "payment_intent"],
  });

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const { patientId, doctorId,doctorName, price } = metadata;

    const paymentData = {
      patientId,
      doctorId,
      doctorName,
      paymentDate: new Date(),
      price,
      transactionId: session_id,
    };

    const res = await createAppointment({...metadata, sessionId: session_id});
    // console.log(res, "from success page");

    if(res.success){

      const resPayment = await createPayment(paymentData);
  
      // console.log(resPayment, 'resPayment');
    }

  }

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6 py-20 bg-slate-50">
      <div className="max-w-2xl w-full bg-white rounded-3xl shadow-xl p-10 text-center">

        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
            <HiCheckCircle className="text-5xl text-green-600" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mt-8">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 text-gray-600 leading-8">
          Thank you for your payment. Your transaction has been completed
          successfully, and your appointment has been confirmed.
        </p>

        <div className="mt-8 bg-slate-100 rounded-xl p-5">
          <p className="text-gray-500 text-sm uppercase tracking-wide">
            Confirmation Email
          </p>

          <p className="mt-2 text-lg font-semibold text-slate-900 break-all">
            {customerEmail}
          </p>
        </div>

        <p className="mt-8 text-gray-600">
          A confirmation email containing your appointment details and payment
          receipt has been sent to the address above.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Button
            
            
            color="primary"
            size="lg"
          >
            <Link href={'/'}>Home</Link>
          </Button>

          <Button
            
           
            variant="bordered"
            size="lg"
          >
            <Link  href="/find-doctors">Book Another Appointment</Link>
          </Button>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-gray-500">
          Need assistance? Contact us at{" "}
          <a
            href="mailto:support@medicareconnect.com"
            className="text-primary font-medium hover:underline"
          >
            support@medicareconnect.com
          </a>
        </div>

      </div>
    </section>
  );
}
