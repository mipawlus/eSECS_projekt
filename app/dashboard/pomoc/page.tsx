export default function PomocPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        ❓ Pomoc
      </h1>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Instrukcje Obsługi</h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">📊 Pulpit</h3>
            <p className="text-sm text-gray-600">
              Dashboard główny z kalendarzem służb na cały rok.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">📅 Harmonogram</h3>
            <p className="text-sm text-gray-600">
              Tworzenie i edycja grafików służb w formacie Excel.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-700">⏱️ Czas Służby</h3>
            <p className="text-sm text-gray-600">
              Rozliczanie godzin służby i nadgodzin wg norm miesięcznych.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t">
            <h3 className="font-semibold text-gray-700 mb-2">📞 Wsparcie Techniczne</h3>
            <p className="text-sm text-gray-600">
              W razie problemów skontaktuj się z administratorem systemu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
