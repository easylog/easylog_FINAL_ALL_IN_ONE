import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function StaffDashboard() {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) router.push('/auth/login');
  }, []);

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">📋 Mitarbeiter-Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🚪 Logout
        </button>
      </div>

      <p className="mb-4">Willkommen! Du kannst jetzt Journal und ChangeBoard nutzen.</p>

      <div className="flex flex-col gap-4">
        <Link href="/journal" className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">
          📝 Zum Journal
        </Link>
        <Link href="/changeboard" className="bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700">
          🔄 Zum ChangeBoard
        </Link>
      </div>
    </main>
  );
}
