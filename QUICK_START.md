# 🚀 Szybki Start - eSECS

## ✅ APLIKACJA URUCHOMIONA!

Aplikacja działa na: **http://localhost:3000**

---

## 🔑 Dane Logowania

### Administrator
- **Email:** `admin@esecs.pl`
- **Hasło:** `admin123`

### Dowódca
- **Email:** `dowodca@esecs.pl`
- **Hasło:** `admin123`

---

## 📊 Status Systemu

✅ **Baza danych:** SQLite (dev.db) - automatycznie utworzona
✅ **Użytkownicy:** 2 (admin + dowódca)
✅ **Jednostka:** JRG Testowa
✅ **Zmiany:** 4 (Zmiana 1, 2, 3, 8-godzinni)
✅ **Strażacy:** 10 przykładowych strażaków

---

## 🎯 Dostępne Strony

1. **Strona główna:** http://localhost:3000
2. **Logowanie:** http://localhost:3000/login
3. **Dashboard (po zalogowaniu):** http://localhost:3000/dashboard

---

## 📝 Uwagi Techniczne

### SQLite zamiast PostgreSQL

Ponieważ PostgreSQL nie był zainstalowany w systemie, projekt został skonfigurowany z **SQLite** jako bazą danych deweloperską. To rozwiązanie:

✅ Nie wymaga instalacji dodatkowego oprogramowania
✅ Działa "out of the box"
✅ Idealne do developmentu i testów
✅ Plik bazy: `prisma/dev.db`

### Przejście na PostgreSQL (opcjonalnie)

Jeśli chcesz przejść na PostgreSQL w przyszłości:

1. Zainstaluj PostgreSQL
2. Edytuj `prisma/schema.prisma`:
   ```prisma
   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```
3. Edytuj `.env`:
   ```
   DATABASE_URL="postgresql://postgres:password@localhost:5432/esecs_db"
   ```
4. Uruchom ponownie:
   ```bash
   npm run db:push
   npm run db:seed
   ```

---

## 🛠️ Komendy

```bash
# Uruchom aplikację
npm run dev

# Otwórz Prisma Studio (GUI do bazy danych)
npm run db:studio

# Zatrzymaj serwer
Ctrl + C w terminalu gdzie działa npm run dev
```

---

## 🎨 Co Możesz Zrobić Teraz?

1. **Zaloguj się** na http://localhost:3000/login
2. **Zobacz Dashboard** z kalendarzem służb
3. **Przeglądaj menu** po lewej stronie
4. **Otwórz Prisma Studio** (`npm run db:studio`) i zobacz dane w bazie

---

## 📂 Struktura Bazy Danych

Możesz przeglądać i edytować dane używając **Prisma Studio**:

```bash
npm run db:studio
```

Otwiera się na: http://localhost:5555

---

**Gotowe do działania! 🚒🔥**
