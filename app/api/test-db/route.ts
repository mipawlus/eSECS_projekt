import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function GET() {
  try {
    // Test database connection
    const users = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
        role: true,
      },
    });

    // Test password for admin user
    const adminUser = await prisma.user.findUnique({
      where: { email: "admin@esecs.pl" },
    });

    let passwordTest = null;
    if (adminUser) {
      const isValid = await bcrypt.compare("admin123", adminUser.password);
      passwordTest = {
        email: adminUser.email,
        passwordHashExists: !!adminUser.password,
        passwordValid: isValid,
      };
    }

    return NextResponse.json({
      success: true,
      usersCount: users.length,
      users,
      passwordTest,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
