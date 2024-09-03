# Film & Series Review Platform

_Ovaj README je također dostupan na [engleskom](README.md)._

Ovo je web aplikacija za pregledavanje filmova i serija te pisanje recenzija za iste. Razvijena kao završni projekt u sklopu Infinum akademije, aplikacija koristi najmodernije tehnologije i prakse frontend razvoja koristeći React, Next.js, i TypeScript.

## Demo

Pogledajte live verziju aplikacije [ovdje](LINK_NA_STRANICU).

## Ključne Tehnologije i Alati

- **Next.js**: Framework za server-side rendering i statičke stranice, omogućava optimizirani SEO i brže učitavanje.
- **React**: JavaScript biblioteka za izradu dinamičkih korisničkih sučelja.
- **React Hooks**: `useState`, `useEffect`, `useContext`, `useMemo` za upravljanje stanjem i efektima u aplikaciji.
- **Chakra UI**: Alat za dizajn i razvoj responzivnih web sučelja, olakšava brzi razvoj i estetski dizajn.
- **TypeScript**: Statički tipizirani superset JavaScript-a, povećava sigurnost i održivost koda.
- **SWR** i **SWR Mutation**: Biblioteka za fetchanje podataka sa strategijom cacheiranja i optimističkim update-ovima.
- **React Testing Library** i **Jest**: Alati za testiranje komponenti i aplikacija, osiguravaju kvalitetu i pouzdanost koda.
- **Prettier** i **ESLint**: Alati za automatsko formatiranje i osiguravanje kvalitete koda.
- **Form Control (useForm)**: Upravljanje unosima u formama i validacija korištenjem React Hook Form.

## Značajke Projekta

- **Prijava i Registracija**: Korisnici se mogu prijaviti i registrirati te pristupiti personaliziranom profilu.
- **Personalizacija Profila**: Korisnici mogu dodati ili promijeniti profilnu sliku i prilagoditi svoj profil prema željama.
- **Pregled Filmova i Serija**: Mogućnost pregledavanja opisa, ocjena, i recenzija za svaku seriju ili film.
- **Pisanje i Uređivanje Recenzija**: Korisnici mogu ostaviti recenzije za filmove i serije, kao i uređivati ili brisati vlastite recenzije.
- **Prikaz Recenzija Ostalih Korisnika**: Pogledajte recenzije i ocjene drugih korisnika.
- **Algoritam za Preporuke**: Implementiran algoritam za pronalaženje optimalnog filma za gledanje za svaku večer, na temelju preferencija korisnika.
- **Top Lista Filmova i Serija**: Pregled najbolje ocijenjenih filmova i serija prema korisničkim ocjenama.
- **Ocjenjivanje sa Zvjezdicama**: Mogućnost ocjenjivanja filmova i serija sa zvjezdicama, doprinosi ukupnoj ocjeni.

## Što Sam Naučio

Rad na ovom projektu omogućio mi je da savladam:

1. **Frontend razvoj s Reactom i Next.js**: Korištenje modernih alata i tehnika za izradu responzivnih i dinamičkih web aplikacija.
2. **Integracija s Backend API-jem**: Dohvaćanje i prikaz podataka koristeći REST API-je i optimizirane strategije za upravljanje podacima.
3. **Converting Design to Code**: Kako pretvoriti dizajn iz Figma alata u funkcionalni kod koristeći HTML, CSS, i JavaScript.
4. **State Management i Data Fetching**: Efikasno upravljanje stanjem aplikacije i dohvaćanje podataka koristeći React Hooks i SWR.
5. **Pisanje Čistog i Održivog Koda**: Održavanje konzistentnog i kvalitetnog koda korištenjem alata poput Prettier i ESLint.
6. **Testiranje aplikacija**: Implementacija sveobuhvatnih testova za komponente i integraciju pomoću Jest i React Testing Library.
7. **TypeScript**: Korištenje statičkog tipiziranja za povećanje sigurnosti i održivosti koda.

## Kako Pokrenuti Projekt

1. Klonirajte repozitorij:

   ```bash
   git clone https://github.com/fran-galic/Infinum-Academy-Film-Review-App.git
   ```

2. Instalirajte potrebne pakete:

   ```bash
   cd film-series-review-platform
   npm install
   ```

3. Pokrenite razvojni server:

   ```bash
   npm run dev
   ```

4. Otvorite http://localhost:3000 u vašem pregledniku.

## Autori

Fran Galić - [GitHub Profile](https://github.com/fran-galic)
