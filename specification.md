Cel systemu

Stworzenie webowej aplikacji do ewidencji czasu służby strażaków pracujących w systemie zmianowym i codziennym. System ma automatyzować grafik, rozliczenia oraz generowanie raportów zgodnie z obowiązującymi przepisami PSP.

2. Kluczowe funkcje
2.1. Użytkownicy i role

Administrator jednostki

Dowódca / przełożony

Strażak (podgląd własny)

2.2. Dane podstawowe

Lista strażaków (dane osobowe, stopień, komórka, system służby, etat)

Stanowiska, komórki organizacyjne

Rodzaje służb i absencji (SZ, Wolne, L4, Delegacja, Szkolenie, Dyżur domowy, nadgodziny itd.)

2.3. Ewidencja czasu służby

Tworzenie harmonogramów (miesięcznie / dziennie)

Automatyczne obliczanie:

przepracowanych godzin

nadgodzin

godzin wymagających odbioru

godzin z dyżurów domowych

godzin z delegacji i szkoleń

Walidacje grafiku (np. minimalne przerwy, poprawne typy służb)

2.4. Raporty

Raport miesięczny indywidualny

Lista obecności / nieobecności

Zestawienie godzin nadliczbowych

Raport do przełożonych

Eksport do PDF/CSV

2.5. Moduły dodatkowe

Historia zmian z pełnym logowaniem

Archiwizacja miesięcy

Uprawnienia oparte o role

Możliwość importu z arkusza (opcjonalnie)

3. Wymagania techniczne
3.1. Architektura

Aplikacja webowa (frontend + backend + baza danych)

REST API lub GraphQL (zależnie od architektury)

JWT/autoryzacja sesyjna

3.2. Technologie (sugerowane, mogą być dowolne)

Frontend: React / Next.js / Tailwind

Backend: Node.js (NestJS) lub Python (FastAPI) lub PHP (Laravel)

Database: PostgreSQL

ORM: Prisma / TypeORM / Sequelize / Eloquent

Konteneryzacja: Docker

3.3. Standardy kodu

Architektura modularna

Dokumentacja endpointów (OpenAPI/Swagger)

Walidacja danych po obu stronach

4. Modele danych — uproszczony szkic
Firefighter { id, name, rank, departmentId, serviceType }
Department { id, name }
Shift { id, firefighterId, date, type, hours, comments }
Absence { id, firefighterId, date, category, hours }
Settings { id, name, value }
User { id, email, passwordHash, role }

5. Przepływ pracy

Admin dodaje jednostki, stanowiska i strażaków

Tworzy grafik miesięczny (ręcznie lub półautomatycznie)

System wylicza godziny zgodnie z przepisami

Dowódca zatwierdza

Strażacy widzą własne wyniki

Raporty są generowane i archiwizowane

6. Zakres pierwszej wersji (MVP)

Logowanie i role

Dodawanie strażaków

Tworzenie grafiku miesięcznego

Automatyczne liczenie godzin i nadgodzin

Podgląd i raport PDF

7. Oczekiwania wobec agenta AI

Agent powinien:

zaprojektować strukturę danych i architekturę systemu

przygotować kod projektu (frontend + backend)

generować dokumentacje OpenAPI

przygotować interfejs do tworzenia i wyświetlania grafików

generować raporty

uwzględnić logikę czasu służby charakterystyczną dla PSP

Jeśli chcesz, mogę przygotować wersję 3:

bardziej formalną (w stylu dokumentu IT)

bardziej uproszczoną

albo w formacie idealnym pod agentów (JSON / YAML / specyfikacja zadania)