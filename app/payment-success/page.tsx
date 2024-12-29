type PageProps = {
  searchParams: Promise<{ amount?: string }>;
};

export default async function PaymentSuccess({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-blue to-blue-two">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Thank you!</h1>
        <h2 className="text-2xl">You successfully sent</h2>

        <div className="bg-white p-2 rounded-md text-blue mt-5 text-4xl font-bold">
          {resolvedSearchParams.amount ? `$${resolvedSearchParams.amount}` : 'No amount specified'}
        </div>
      </div>
    </main>
  );
}