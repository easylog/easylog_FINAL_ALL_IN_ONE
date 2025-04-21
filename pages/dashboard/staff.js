import Link from 'next/link';

export default function StaffDashboard() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">📋 Mitarbeiter-Dashboard</h1>
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
