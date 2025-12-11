import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    unitId?: string;
    unitName?: string;
  }

  interface Session {
    user: {
      id: string;
      email: string;
      name: string;
      role: string;
      unitId?: string;
      unitName?: string;
    };
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: string;
    unitId?: string;
    unitName?: string;
  }
}
