import Link from "next/link";

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

        <div className="bg-white p-2 rounded-xl text-blue mt-5 text-4xl font-bold">
          {resolvedSearchParams.amount ? `$${resolvedSearchParams.amount}` : 'No amount specified'}
        </div>
        <Link href="/my-ads"><div className="text-blue p-2 rounded-xl mt-5 text-sm bg-white font-bold cursor-pointer">Post Ad</div></Link>
        <Link href="/sponsors"><div className="text-white rounded-xl mt-5 text-sm font-medium cursor-pointer">Back to Dashboard</div></Link>
      </div>
    </main>
  );
}