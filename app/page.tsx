export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-50 to-orange-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">🚒 eSECS</h1>
        <p className="text-2xl text-gray-700 mb-8">
          System Ewidencji Czasu Służby Strażaków
        </p>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <p className="text-gray-600 mb-4">
            Aplikacja startowa została pomyślnie utworzona!
          </p>
          <div className="text-left text-sm text-gray-500 space-y-2">
            <p>✅ Next.js 15 + TypeScript</p>
            <p>✅ Tailwind CSS skonfigurowany</p>
            <p>✅ Struktura projektu gotowa</p>
            <p className="pt-4 font-semibold text-gray-700">
              Następne kroki: Konfiguracja bazy danych i Prisma ORM
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
