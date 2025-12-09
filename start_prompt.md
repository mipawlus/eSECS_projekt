1. Cel systemu

System służy do prowadzenia ewidencji czasu służby strażaków PSP/OSP w systemie zmianowym 24/48 oraz 8-godzinnym.
Umożliwia: tworzenie grafików, rozliczanie godzin, ewidencję urlopów i zwolnień, raportowanie oraz generowanie dokumentów PDF/Excel.

Nie ma kont strażaków — tylko: Administrator i Dowódcy/Kierownicy.

2. Role i uprawnienia
Administrator

pełna edycja wszystkich danych,

zatwierdzanie/edycja zamkniętych miesięcy,

konfiguracja jednostek, zmian, kolorów, haseł.

Dowódca / Kierownik

tworzenie i edycja grafików swojej jednostki,

wprowadzanie urlopów, L4, szkoleń, delegacji,

wgląd w raporty swojej jednostki,

brak dostępu do innych jednostek.

3. Model danych (skrót wymagany do generowania bazy)
3.1 Strażak

ID

imię

nazwisko

PESEL/EWD

stopień

stanowisko

jednostka_ID

zmiana_ID

uprawnienia: administrator / dowodca

3.2 Zmiana

ID

nazwa (1 / 2 / 3 / 8-godzinni)

godziny rozpoczęcia/końca

stan minimalny

3.3 Grafik / Wpis służby

ID

strażak_ID

data

typ wpisu

godziny wypracowane (automatyczne)

Dopuszczalne typy wpisów (ostateczna lista):

służba 24h

służba skrócona

8-godzinne

szkolenie

szkolenie specjalistyczne

delegacja

dyżur domowy

dyżur operacyjny

urlop wypoczynkowy

urlop dodatkowy

urlop ojcowski

L4

nieobecność usprawiedliwiona

odpracowanie

zawody / wydarzenia

3.4 Urlopy / L4

ID

strażak_ID

od / do

typ

zaświadczenie nr

kto wprowadził

data wprowadzenia

3.5 Nadgodziny

ID

strażak_ID

miesiąc

norma_miesięczna

godziny_wypracowane

nadgodziny (wyliczane)

3.6 Logi systemowe

kto

co zmienił

kiedy

4. Zasady obliczania czasu i norm

Norma miesięczna = dni robocze × 8h (Kp)

Służba 24/48 = 24h

Urlop w systemie zmianowym liczy się jak „zgodnie z harmonogramem” (czyli tyle godzin, ile wynikałoby z danego dnia)

Brak odpracowań (nie używane)

5. Grafik – zachowanie

Grafik działa jak Excel.
Komórka = dzień × strażak.
Klik → wybór rodzaju służby → system przelicza normy i nadgodziny.

Brak przeciągania strażaków ani blokowego kopiowania.

Grafik ma ciągłą edycję — brak statusów.
Można drukować w każdej chwili.

6. UI / UX – wymagania kluczowe

Menu boczne po lewej:

Pulpit

Harmonogram

Czas służby

Zwolnienia chorobowe

Urlop

Nadgodziny

Analiza

Konfiguracja

Pomoc

Na dole: nazwa użytkownika → jednostka.

6.1 Kolory zmian

Domyślne:

zmiana 1 – czerwony

zmiana 2 – żółty

zmiana 3 – niebieski

szkolenie – zielony

urlop – pomarańczowy

L4 – szary

Kolory muszą być zmienialne w konfiguracji.

6.2 Responsywność

pełne działanie na desktopie,

wersja mobilna uproszczona (tylko podgląd i proste raporty).

7. Workflow (na potrzeby backendu)
7.1 Grafik

dowódca edytuje → zapisuje → drukuje.
Brak akceptacji przez strażaków.

7.2 Urlopy / L4

dowódca wprowadza → automatycznie zapisane w grafiku → przeliczenie norm.

7.3 Nadgodziny

system automatycznie oblicza wg normy,

dowódca generuje raport miesięczny.

8. Raportowanie

lista obecności

raport dzienny

raport miesięczny

raport roczny

podsumowanie godzin wypracowanych vs. normatyw

eksport PDF/Excel

9. API

Wymagane:

REST + OpenAPI 3.1 (Swagger)

standardowe endpointy CRUD dla:

strażaków

zmian

grafików

urlopów

nadgodzin

raportów

Dokładną listę endpointów AI wygeneruje na podstawie powyższego modelu.

10. Dodatkowy moduł kadrowy

Tak — system ma wyliczać wymiar urlopu rocznego.