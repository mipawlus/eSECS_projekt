🚒 SPECYFIKACJA APLIKACJI: SYSTEM EWIDENCJI CZASU SŁUŻBY STRAŻAKÓW
1. Cel systemu
Celem aplikacji jest stworzenie kompleksowego narzędzia do ewidencji czasu służby strażaków dla jednostek PSP i OSP, obejmującego planowanie grafików, rozliczanie godzin, nadgodzin, urlopów, nieobecności, prowadzenie dokumentacji oraz generowanie raportów w formacie PDF/Excel. System ma usprawnić pracę dowódców, kadr oraz samych strażaków, zapewniając przejrzystość i automatyzację procesów.

2. Użytkownicy i role
2.1 Administrator systemu
zarządza jednostkami, strażakami, strukturą organizacyjną,
ustala ustawienia globalne (normy godzinowe, typy służb, uprawnienia),
może edytować wszystko.

2.2 Dowódca / Kierownik
tworzy i zatwierdza grafiki służb,
zarządza podwładnymi,
dodaje urlopy, nieobecności, dyżury, wyjazdy szkoleniowe,
generuje raporty miesięczne.
podgląd grafiku całej zmiany lub komórki organizacyjnej,
podgląd normy godzinowej i nadgodzin,
otrzymuje powiadomienia.
eksport danych do systemów zewnętrznych.

3. Model czasu służby i rozliczeń
3.1 Obsługiwane systemy pracy:
24/48 (standard PSP),
służba codzienna 8-godzinna,
dyżury domowe,
system mieszany.

3.2 Elementy podlegające ewidencji:
służby pełne,
służby skrócone,
nadgodziny,
dyżury,
urlopy:
wypoczynkowe,
okolicznościowe,
L4,
szkoleniowe,
kursy,
KPP / poligon / zawody,
odpracowania.

3.3 Automatyczne rozliczanie:
wyliczanie normy miesięcznej,
rozliczanie nadgodzin zgodnie z zasadami PSP,
wyrównywanie godzin,
wykrywanie błędów (np. "strażak wpisany na dwóch służbach jednocześnie").

4. Funkcjonalności systemu
4.1 Planowanie grafików
widok miesięczny dla całej JRG,
przeciąganie i upuszczanie służb (drag&drop),
kopiowanie grafików między miesiącami,
szybkie zamiany strażaków,
wersjonowanie grafiku (propozycja → zatwierdzenie).

4.2 Ewidencja zdarzeń i nieobecności
rejestr urlopów,
rejestr zwolnień lekarskich,
rejestr szkoleń i delegacji,
obsługa dyżurów domowych.

4.3 Panel strażaka
podgląd swojego harmonogramu,
historia urlopów i nadgodzin,
powiadomienia o zmianach w grafiku,
składanie wniosków (urlop, zamiana służb, odpracowanie).

4.4 Raportowanie
raport miesięczny do zatwierdzenia przez dowódcę,
raport roczny,
zestawienia godzin służb, nadgodzin, urlopów,
eksport PDF/Excel,
raporty dla PSP, KW, KG.

4.5 Integracje (opcjonalne)
import danych z systemów kadrowych,
integracja z RCP (rejestr wejść/wyjść),
integracja z systemami alarmowania.

4.6 Powiadomienia
e-mail / SMS (opcjonalnie),
powiadomienia web push,
alerty o błędach w grafiku.

5. Technologia i architektura
5.1 Frontend
React / Next.js,
mobilna responsywność,
możliwość stworzenia aplikacji mobilnej (Android).

5.2 Backend
Node.js / NestJS
 lub
Python / Django
 lub
Laravel (PHP)

Backend zapewnia:
logikę rozliczania godzin,
bezpieczeństwo danych,
zarządzanie uprawnieniami.

5.3 Baza danych
PostgreSQL (zalecana),
dane szyfrowane.

5.4 API
REST lub GraphQL,
możliwość integracji z systemami zewnętrznymi.

6. Bezpieczeństwo
szyfrowanie danych (w tym haseł),
kopie zapasowe,
role i uprawnienia oparte na RBAC,
logowanie aktywności systemowej.

7. Dostęp i logowanie
login + hasło,
opcjonalnie SSO (Microsoft/Google),
ograniczenia IP dla stanowisk kadrowych / dowódczych.

8. Moduły dodatkowe (opcjonalnie)
terminarz badań lekarskich i szkoleń,

9. Widoki aplikacji
9.1 Dashboard
dzisiejsze służby,
nadgodziny do rozliczenia,
nadchodzące urlopy,
ostrzeżenia o błędach.

9.2 Grafik służb
kalendarz miesięczny,
kolory: służba, wolne, dyżur, urlop, L4 itd.

9.3 Panel dowódcy
lista strażaków,
szybkie statystyki,
raporty.
podgląd grafiku


Diagram graficzny

```mermaid
 graph TB
    subgraph Users["👥 UŻYTKOWNICY"]
        Admin["🔧 Administrator<br/>- Zarządzanie jednostkami<br/>- Konfiguracja systemu<br/>- Dodawanie strażaków<br/>- Zarządzanie zmianami"]
        Dowodca["👨‍✈️ Dowódca/Kierownik<br/>- Dodawanie urlopów<br/>- Dodawanie nieobecności<br/>- Podgląd grafiku zmiany<br/>- Podgląd nadgodzin"]
    end

    subgraph LeftMenu["📋 MENU BOCZNE - LEWA STRONA"]
        MenuItems["📍 POZYCJE MENU:<br/>━━━━━━━━━━━<br/>1. Pulpit<br/>2. Harmonogram<br/>3. Czas służby<br/>4. Zwolnienia chorobowe<br/>5. Urlop<br/>6. Nadgodziny<br/>7. Analiza<br/>8. Konfiguracja<br/>9. Pomoc<br/>━━━━━━━━━━━<br/>👤 Nazwa użytkownika<br/>🏢 Jednostka/Komórka"]
    end

    subgraph Pulpit["📊 1. PULPIT"]
        Powitanie["👋 Dymek powitalny<br/>'Witaj'"]
        Kalendarz["📅 Kalendarz roczny<br/>- Wszystkie miesiące<br/>- Nawigacja ← →<br/>- Kolorowanie zmian:<br/>  • Zmiana 1<br/>  • Zmiana 2<br/>  • Zmiana 3"]
    end

    subgraph Harmonogram["📅 2. HARMONOGRAM"]
        HarmMenu["📄 Menu Plik:<br/>- Drukuj harmonogram<br/>- Drukuj grafik<br/>- Drukuj stan faktyczny<br/>- Drukuj listę obecności<br/>- Drukuj podsumowanie"]
        HarmKarty["📑 Karty poziom 1:<br/>- Harmonogram<br/>- Grafik<br/>- Stan faktyczny"]
        HarmZmiany["👥 Karty poziom 2:<br/>- Zmiana 1<br/>- Zmiana 2<br/>- Zmiana 3<br/>- 8-godzinni"]
    end

    subgraph CzasSluzby["⏱️ 3. CZAS SŁUŻBY"]
        CzasMenu["📑 Menu kart:<br/>- Cały okres<br/>- Od - Do"]
        CzasTabela["📊 Tabela z nagłówkami:<br/>━━━━━━━━━━━━━━━━━<br/>• Imię i nazwisko<br/>• Faktycznie na służbie<br/>• Urlop wypoczynkowy<br/>• Urlop dodatkowy<br/>• Urlop ojcowski<br/>• Zwolnienia chorobowe<br/>• Nieobecności usprawiedliwione<br/>• Szkolenie<br/>• Urlop szkoleniowy<br/>• Delegacja"]
        CzasRozwijane["🔽 Wiersze rozwijane:<br/>▸ Zmiana 1<br/>  └─ Lista strażaków<br/>▸ Zmiana 2<br/>  └─ Lista strażaków<br/>▸ Zmiana 3<br/>  └─ Lista strażaków<br/>▸ 8-godzinni<br/>  └─ Lista strażaków"]
    end

    subgraph Zwolnienia["🏥 4. ZWOLNIENIA CHOROBOWE"]
        ZwolKarty["📑 Menu kart:<br/>- Ewidencja zwolnień<br/>- Raport zwolnień do potrąceń<br/>- Zastępstwa<br/>- Raport zwolnień za okres"]
        ZwolTabela["📋 Pola danych:<br/>━━━━━━━━━━━━━━━━━<br/>• Imię strażaka<br/>• Nazwisko strażaka<br/>• Numer PESEL/EWD<br/>• Stopień<br/>• Od (data)<br/>• Do (data)<br/>• Przyczyna zwolnienia<br/>• Wysokość uposażenia<br/>• Data dostarczenia<br/>• Data wprowadzenia<br/>• Forma<br/>• Data wystawienia"]
    end

    subgraph Urlopy["🌴 5. URLOPY"]
        UrlopStatus["🔄 Status: W trakcie implementacji"]
    end

    subgraph Nadgodziny["⏰ 6. NADGODZINY"]
        NadgodzinyStatus["🔄 Status: W trakcie implementacji"]
    end

    subgraph Analiza["📈 7. ANALIZA"]
        AnalizaOpis["🔍 Funkcje:<br/>- Przegląd danych urlopów<br/>- Przegląd nadgodzin<br/>- Statystyki i zestawienia<br/>- Wykresy i raporty"]
    end

    subgraph Konfiguracja["⚙️ 8. KONFIGURACJA"]
        KonfJednostki["🏢 Konfiguracja jednostki:<br/>- Zarządzanie zmianami<br/>- Zarządzanie hasłami<br/>- Zarządzanie stanami minimalnymi<br/>- Zarządzanie specjalizacjami<br/>- Specjalizacje strażaków"]
        KonfDodawanie["➕ Dodawanie:<br/>- Dodawanie jednostek<br/>- Dodawanie strażaków<br/>- Przypisanie do zmian<br/>- Przypisanie do systemu 8h"]
    end

    subgraph Pomoc["❓ 9. POMOC"]
        PomocOpis["📚 Sekcje pomocy:<br/>- Instrukcje obsługi<br/>- FAQ<br/>- Kontakt<br/>- Dokumentacja"]
    end

    subgraph Backend["⚙️ BACKEND"]
        Auth["🔐 Autoryzacja<br/>- Login/hasło<br/>- RBAC<br/>- Sesje"]
        SystemSluzby["🔄 System służby:<br/>- 24/48 (trójzmianowy)<br/>- 8-godzinny<br/>- Dyżury domowe"]
        Rozliczenia["💰 Moduł rozliczeń:<br/>- Norma miesięczna<br/>- Nadgodziny<br/>- Wyrównywanie<br/>- Wykrywanie błędów"]
        Raporty["📄 Generator raportów:<br/>- PDF/Excel<br/>- Harmonogramy<br/>- Grafiki<br/>- Listy obecności"]
    end

    subgraph Database["💾 POSTGRESQL"]
        DB["🗄️ Tabele:<br/>- Jednostki<br/>- Strażacy<br/>- Zmiany<br/>- Grafiki<br/>- Urlopy<br/>- Zwolnienia<br/>- Nadgodziny<br/>- Specjalizacje<br/>- Logi"]
    end

    Admin --> LeftMenu
    Dowodca --> LeftMenu
    
    LeftMenu --> Pulpit
    LeftMenu --> Harmonogram
    LeftMenu --> CzasSluzby
    LeftMenu --> Zwolnienia
    LeftMenu --> Urlopy
    LeftMenu --> Nadgodziny
    LeftMenu --> Analiza
    LeftMenu --> Konfiguracja
    LeftMenu --> Pomoc
    
    Pulpit --> Auth
    Harmonogram --> Auth
    CzasSluzby --> Auth
    Zwolnienia --> Auth
    
    Auth --> SystemSluzby
    Auth --> Rozliczenia
    Auth --> Raporty
    
    SystemSluzby --> DB
    Rozliczenia --> DB
    Raporty --> DB
    
    Konfiguracja --> DB
    
    style Users fill:#e1f5ff
    style LeftMenu fill:#fff4e1
    style Pulpit fill:#e8f5e9
    style Harmonogram fill:#f3e5f5
    style CzasSluzby fill:#fce4ec
    style Zwolnienia fill:#fff9c4
    style Urlopy fill:#e0f2f1
    style Nadgodziny fill:#fce4ec
    style Analiza fill:#f3e5f5
    style Konfiguracja fill:#fff4e1
    style Pomoc fill:#e1f5ff
    style Backend fill:#e8f5e9
    style Database fill:#f3e5f5
```