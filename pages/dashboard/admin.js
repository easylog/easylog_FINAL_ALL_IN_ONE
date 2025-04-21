import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';

export default function AdminDashboard() {
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
        <h1 className="text-3xl font-bold">🧾 Admin-Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🚪 Logout
        </button>
      </div>

      <p className="mb-4">Hier siehst du Rechnungen, Nutzer und Systemübersicht.</p>

      <div className="flex flex-col gap-4">
        <Link href="/journal" className="bg-blue-600 text-white px-4 py-2 rounded text-center hover:bg-blue-700">
          📝 Journal einsehen
        </Link>
        <Link href="/changeboard" className="bg-green-600 text-white px-4 py-2 rounded text-center hover:bg-green-700">
          📋 ChangeBoard Übersicht
        </Link>
      </div>
    </main>
  );
}
