import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to the Monitoring Dashboard</h1>
        <Link href="/monitoring">
          <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-100">
            Go to Monitoring Page
          </button>
        </Link>
      </div>
    </div>
  );
}
