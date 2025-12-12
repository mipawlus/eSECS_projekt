const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    const users = await prisma.user.count();
    const firefighters = await prisma.firefighter.count();
    const shifts = await prisma.shift.count();
    const units = await prisma.unit.count();

    console.log('✅ Baza danych działa!');
    console.log(`   Użytkownicy: ${users}`);
    console.log(`   Strażacy: ${firefighters}`);
    console.log(`   Zmiany: ${shifts}`);
    console.log(`   Jednostki: ${units}`);

    if (users === 0) {
      console.log('\n⚠️  Baza jest pusta - uruchom: npm run db:seed');
    } else {
      console.log('\n✅ Baza zawiera dane testowe!');
    }

    await prisma.$disconnect();
  } catch (error) {
    console.error('❌ Błąd bazy danych:', error.message);
    await prisma.$disconnect();
    process.exit(1);
  }
}

checkDatabase();
