import { createAppointment, createPayment } from "@/lib/Actions/patient/action";
import { getStripe } from "@/lib/stripe";
import { redirect } from "next/navigation";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";
import { BiErrorCircle } from "react-icons/bi";

function ErrorState({ message }) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-md rounded-3xl bg-surface p-8 text-center shadow-xl">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-danger-soft">
            <BiErrorCircle
              className="h-9 w-9 text-danger-soft-foreground"
              aria-hidden="true"
            />
          </div>
        </div>
        <h1 className="mt-6 text-2xl font-bold text-foreground">
          Payment not verified
        </h1>
        <p className="mt-3 text-muted">{message}</p>
        <Link href="/find-doctors" className="primary-link mt-6 px-6">
          Back to doctors
        </Link>
      </div>
    </section>
  );
}

export default async function Success({ searchParams }) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <ErrorState message="Please provide a valid session_id (cs_test_...)." />
    );
  }

  let session;
  try {
    const stripe = getStripe();
    session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "payment_intent"],
    });
  } catch {
    return (
      <ErrorState message="We couldn't verify this payment session. If you were charged, please contact support." />
    );
  }

  const { status, metadata, customer_details } = session;
  const customerEmail = customer_details?.email;

  if (status === "open") {
    return redirect("/");
  }

  if (status === "complete") {
    const { patientId, doctorId, doctorName, price } = metadata;

    const paymentData = {
      patientId,
      doctorId,
      doctorName,
      paymentDate: new Date(),
      price,
      transactionId: session_id,
    };

    const res = await createAppointment({ ...metadata, sessionId: session_id });

    if (res.success) {
      await createPayment(paymentData);
    }
  }

  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-background px-4 py-20">
      <div className="w-full max-w-2xl rounded-3xl bg-surface p-6 text-center shadow-xl sm:p-10">
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-success-soft">
            <HiCheckCircle
              className="h-12 w-12 text-success-soft-foreground"
              aria-hidden="true"
            />
          </div>
        </div>

        <h1 className="mt-8 text-3xl font-bold text-foreground sm:text-4xl">
          Payment Successful 🎉
        </h1>

        <p className="mt-4 leading-8 text-muted">
          Thank you for your payment. Your transaction has been completed
          successfully, and your appointment has been confirmed.
        </p>

        <div className="mt-8 rounded-xl bg-accent-soft p-5">
          <p className="text-sm uppercase tracking-wide text-muted">
            Confirmation Email
          </p>

          <p className="mt-2 break-all text-lg font-semibold text-foreground">
            {customerEmail || "your email address"}
          </p>
        </div>

        <p className="mt-8 text-muted">
          A confirmation email containing your appointment details and payment
          receipt has been sent to the address above.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/" className="primary-link px-6">
            Home
          </Link>

          <Link href="/find-doctors" className="secondary-link px-6">
            Book another appointment
          </Link>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-sm text-muted">
          Need assistance? Contact us at{" "}
          <a
            href="mailto:support@medicareconnect.com"
            className="font-medium text-accent hover:underline"
          >
            support@medicareconnect.com
          </a>
        </div>
      </div>
    </section>
  );
}
