# 🚒 eSECS - Instrukcja Instalacji i Uruchomienia

> **⚡ SZYBKI START:** Jeśli chcesz po prostu uruchomić aplikację, zobacz [QUICK_START.md](./QUICK_START.md)

## 📋 Wymagania

- **Node.js** 18.x lub nowszy
- **npm** lub **yarn**
- **PostgreSQL** 14.x lub nowszy (opcjonalnie - domyślnie używamy SQLite)

---

## 🚀 Instalacja Krok po Kroku

### 1️⃣ Sklonuj repozytorium (jeśli jeszcze nie masz)

```bash
git clone <URL_REPOZYTORIUM>
cd eSECS_projekt
```

### 2️⃣ Zainstaluj zależności

```bash
npm install
```

### 3️⃣ Skonfiguruj bazę danych PostgreSQL

#### Opcja A: Lokalna instalacja PostgreSQL

1. Zainstaluj PostgreSQL z [https://www.postgresql.org/download/](https://www.postgresql.org/download/)
2. Utwórz bazę danych:

```sql
CREATE DATABASE esecs_db;
```

#### Opcja B: Docker (zalecane)

```bash
docker run --name esecs-postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=esecs_db -p 5432:5432 -d postgres:15
```

### 4️⃣ Skonfiguruj zmienne środowiskowe

Skopiuj plik `.env.example` do `.env`:

```bash
cp .env.example .env
```

Edytuj plik `.env` i dostosuj dane połączenia:

```env
# Database
DATABASE_URL="postgresql://postgres:password@localhost:5432/esecs_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="twoj-losowy-sekret-klucz-zmien-to-w-produkcji"
```

**WAŻNE:** Wygeneruj bezpieczny `NEXTAUTH_SECRET`:

```bash
openssl rand -base64 32
```

### 5️⃣ Zainicjalizuj bazę danych

```bash
# Synchronizuj schemat bazy danych
npm run db:push

# Wypełnij bazę danych przykładowymi danymi
npm run db:seed
```

Po wykonaniu seed, zobaczysz dane logowania:
- **Administrator:** `admin@esecs.pl` / `admin123`
- **Dowódca:** `dowodca@esecs.pl` / `admin123`

### 6️⃣ Uruchom aplikację

```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: **http://localhost:3000**

---

## 🔑 Logowanie

Otwórz przeglądarkę i przejdź do:

```
http://localhost:3000/login
```

Użyj jednego z kont testowych:
- **Email:** `admin@esecs.pl`
- **Hasło:** `admin123`

---

## 📊 Dodatkowe Komendy

### Przeglądanie bazy danych (Prisma Studio)

```bash
npm run db:studio
```

Otwiera GUI do przeglądania i edycji danych w bazie.

### Build produkcyjny

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

---

## 🗂️ Struktura Projektu

```
eSECS_projekt/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   │   └── auth/         # NextAuth endpoints
│   ├── dashboard/        # Strony dashboardu
│   ├── login/            # Strona logowania
│   ├── globals.css       # Style globalne
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Strona główna
├── components/            # Komponenty React
│   └── sidebar.tsx       # Menu boczne
├── lib/                   # Utilities i konfiguracja
│   ├── auth.ts           # Konfiguracja NextAuth
│   ├── prisma.ts         # Prisma client
│   └── utils.ts          # Funkcje pomocnicze
├── prisma/               # Prisma ORM
│   ├── schema.prisma     # Schemat bazy danych
│   └── seed.ts           # Skrypt inicjalizacji
├── types/                # TypeScript types
│   └── next-auth.d.ts    # Typy NextAuth
├── .env                  # Zmienne środowiskowe (nie w repo)
├── .env.example          # Przykład zmiennych
├── package.json          # Zależności npm
└── tsconfig.json         # Konfiguracja TypeScript
```

---

## 🎨 Funkcjonalności (MVP)

### ✅ Zaimplementowane

- [x] System logowania (NextAuth.js)
- [x] Baza danych PostgreSQL + Prisma ORM
- [x] Layout z menu bocznym
- [x] Pulpit (Dashboard) z kalendarzem rocznym
- [x] Model danych: Użytkownicy, Jednostki, Zmiany, Strażacy, Grafiki, Urlopy, Nadgodziny
- [x] Role: Administrator, Dowódca

### 🚧 W Trakcie Implementacji

- [ ] Moduł Harmonogram (grafik służb jak Excel)
- [ ] Moduł Czas Służby (rozliczanie godzin)
- [ ] Moduł Zwolnienia Chorobowe
- [ ] Moduł Urlopy
- [ ] Moduł Nadgodziny
- [ ] Moduł Analiza (raporty)
- [ ] Moduł Konfiguracja (zarządzanie danymi)
- [ ] Generowanie raportów PDF/Excel

---

## 🐛 Rozwiązywanie Problemów

### Problem: "Error: P1001 Can't reach database server"

**Rozwiązanie:** Sprawdź czy PostgreSQL jest uruchomiony i `DATABASE_URL` w `.env` jest poprawny.

```bash
# Sprawdź status PostgreSQL
systemctl status postgresql  # Linux
brew services list           # macOS
```

### Problem: "Module not found" podczas `npm run dev`

**Rozwiązanie:** Usuń `node_modules` i zainstaluj ponownie:

```bash
rm -rf node_modules package-lock.json
npm install
```

### Problem: "Prisma Client is not generated"

**Rozwiązanie:** Wygeneruj Prisma Client:

```bash
npx prisma generate
```

---

## 📞 Wsparcie

Jeśli napotkasz problemy:
1. Sprawdź logi w konsoli (`npm run dev`)
2. Sprawdź czy wszystkie zależności są zainstalowane
3. Sprawdź konfigurację `.env`
4. Sprawdź czy baza danych jest dostępna

---

## 📄 Licencja

Projekt wewnętrzny PSP/OSP

---

## 🎯 Następne Kroki

Po pomyślnym uruchomieniu aplikacji, możesz:
1. Dodać więcej strażaków w Prisma Studio
2. Rozpocząć tworzenie grafików służb
3. Testować funkcje rozliczania czasu
4. Dodawać nowe moduły zgodnie z specyfikacją

**Powodzenia!** 🚒🔥
