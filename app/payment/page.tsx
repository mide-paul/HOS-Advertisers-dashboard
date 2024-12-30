"use client";
import React, { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import CheckoutPage from '@/components/CheckoutPage';
import convertToSubcurrency from '@/lib/convertToSubcurrency';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string);

const PaymentContent = () => {
  const searchParams = useSearchParams();
  const price = searchParams.get('price');
  const amount = price ? parseInt(price, 10) : 3000; // Default to $3000 if no price

  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: "payment",
        amount: convertToSubcurrency(amount),
        currency: "usd",
      }}
    >
      <CheckoutPage amount={amount} />
    </Elements>
  );
};

const Page = () => {
  return (
    <Suspense fallback={<div>Loading payment details...</div>}>
      <div className='relative mt-5 ml-3'>Payment page</div>
      <PaymentContent />
    </Suspense>
  );
};

export default Page;