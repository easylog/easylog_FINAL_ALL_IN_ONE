import Link from 'next/link';

const kunden = ['lisa', 'marco', 'tom']; // 👈 später dynamisch aus DB

export default function ChangeBoardIndex() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">📋 ChangeBoard Auswahl</h1>
      <ul className="space-y-3">
        {kunden.map((name) => (
          <li key={name}>
            <Link
              href={`/changeboard/${name}`}
              className="block bg-blue-100 hover:bg-blue-200 text-blue-800 p-3 rounded"
            >
              🧠 ChangeBoard für {name.charAt(0).toUpperCase() + name.slice(1)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
