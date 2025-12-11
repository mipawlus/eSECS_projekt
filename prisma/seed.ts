import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Rozpoczynam inicjalizację bazy danych...");

  // Tworzenie jednostki testowej
  const unit = await prisma.unit.upsert({
    where: { id: "test-unit-1" },
    update: {},
    create: {
      id: "test-unit-1",
      name: "JRG Testowa",
      address: "ul. Testowa 1, 00-001 Warszawa",
    },
  });

  console.log("✅ Utworzono jednostkę:", unit.name);

  // Tworzenie zmian
  const shift1 = await prisma.shift.upsert({
    where: { id: "shift-1" },
    update: {},
    create: {
      id: "shift-1",
      name: "Zmiana 1",
      color: "#EF4444", // red-500
      startTime: "08:00",
      endTime: "08:00",
      minStaffCount: 10,
      unitId: unit.id,
    },
  });

  const shift2 = await prisma.shift.upsert({
    where: { id: "shift-2" },
    update: {},
    create: {
      id: "shift-2",
      name: "Zmiana 2",
      color: "#EAB308", // yellow-500
      startTime: "08:00",
      endTime: "08:00",
      minStaffCount: 10,
      unitId: unit.id,
    },
  });

  const shift3 = await prisma.shift.upsert({
    where: { id: "shift-3" },
    update: {},
    create: {
      id: "shift-3",
      name: "Zmiana 3",
      color: "#3B82F6", // blue-500
      startTime: "08:00",
      endTime: "08:00",
      minStaffCount: 10,
      unitId: unit.id,
    },
  });

  const shift8h = await prisma.shift.upsert({
    where: { id: "shift-8h" },
    update: {},
    create: {
      id: "shift-8h",
      name: "8-godzinni",
      color: "#10B981", // green-500
      startTime: "07:00",
      endTime: "15:00",
      minStaffCount: 5,
      unitId: unit.id,
    },
  });

  console.log("✅ Utworzono zmiany");

  // Tworzenie użytkownika administratora
  const hashedPassword = await bcrypt.hash("admin123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@esecs.pl" },
    update: {},
    create: {
      email: "admin@esecs.pl",
      password: hashedPassword,
      name: "Administrator Testowy",
      role: "ADMINISTRATOR",
      unitId: unit.id,
    },
  });

  console.log("✅ Utworzono użytkownika administratora:", admin.email);

  // Tworzenie użytkownika dowódcy
  const dowodca = await prisma.user.upsert({
    where: { email: "dowodca@esecs.pl" },
    update: {},
    create: {
      email: "dowodca@esecs.pl",
      password: hashedPassword,
      name: "Dowódca Testowy",
      role: "DOWODCA",
      unitId: unit.id,
    },
  });

  console.log("✅ Utworzono użytkownika dowódcy:", dowodca.email);

  // Tworzenie przykładowych strażaków
  const firefighters = [
    { firstName: "Jan", lastName: "Kowalski", rank: "st. kpt.", shiftId: shift1.id },
    { firstName: "Piotr", lastName: "Nowak", rank: "kpt.", shiftId: shift1.id },
    { firstName: "Marek", lastName: "Wiśniewski", rank: "st. asp.", shiftId: shift1.id },
    { firstName: "Andrzej", lastName: "Wójcik", rank: "asp.", shiftId: shift2.id },
    { firstName: "Krzysztof", lastName: "Kamiński", rank: "st. ogn.", shiftId: shift2.id },
    { firstName: "Michał", lastName: "Lewandowski", rank: "ogn.", shiftId: shift2.id },
    { firstName: "Tomasz", lastName: "Zieliński", rank: "st. asp.", shiftId: shift3.id },
    { firstName: "Adam", lastName: "Szymański", rank: "asp.", shiftId: shift3.id },
    { firstName: "Paweł", lastName: "Woźniak", rank: "ogn.", shiftId: shift3.id },
    { firstName: "Robert", lastName: "Dąbrowski", rank: "st. kpt.", shiftId: shift8h.id },
  ];

  for (const ff of firefighters) {
    await prisma.firefighter.create({
      data: {
        ...ff,
        pesel: `${Math.floor(Math.random() * 90000000000) + 10000000000}`,
        position: "Strażak",
        serviceType: ff.shiftId === shift8h.id ? "DAILY_8H" : "SHIFT_24_48",
        unitId: unit.id,
      },
    });
  }

  console.log("✅ Utworzono", firefighters.length, "strażaków");

  console.log("\n🎉 Inicjalizacja bazy danych zakończona sukcesem!");
  console.log("\n📋 Dane logowania:");
  console.log("   Administrator: admin@esecs.pl / admin123");
  console.log("   Dowódca: dowodca@esecs.pl / admin123");
}

main()
  .catch((e) => {
    console.error("❌ Błąd podczas inicjalizacji:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
