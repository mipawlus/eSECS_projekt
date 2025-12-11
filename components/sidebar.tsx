"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Calendar,
  Clock,
  HeartPulse,
  Umbrella,
  Timer,
  BarChart3,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";
import { signOut, useSession } from "next-auth/react";

const menuItems = [
  {
    name: "Pulpit",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Harmonogram",
    href: "/dashboard/harmonogram",
    icon: Calendar,
  },
  {
    name: "Czas służby",
    href: "/dashboard/czas-sluzby",
    icon: Clock,
  },
  {
    name: "Zwolnienia chorobowe",
    href: "/dashboard/zwolnienia",
    icon: HeartPulse,
  },
  {
    name: "Urlop",
    href: "/dashboard/urlopy",
    icon: Umbrella,
  },
  {
    name: "Nadgodziny",
    href: "/dashboard/nadgodziny",
    icon: Timer,
  },
  {
    name: "Analiza",
    href: "/dashboard/analiza",
    icon: BarChart3,
  },
  {
    name: "Konfiguracja",
    href: "/dashboard/konfiguracja",
    icon: Settings,
  },
  {
    name: "Pomoc",
    href: "/dashboard/pomoc",
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();
  const { data: session } = useSession();

  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      {/* Logo */}
      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <h1 className="text-2xl font-bold text-red-500">🚒 eSECS</h1>
      </div>

      {/* Menu items */}
      <nav className="flex-1 overflow-y-auto p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-red-600 text-white"
                      : "text-gray-300 hover:bg-gray-800 hover:text-white"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User info at bottom */}
      <div className="border-t border-gray-800 p-4">
        <div className="mb-2">
          <p className="text-sm font-medium text-white">
            {session?.user?.name || "Użytkownik"}
          </p>
          <p className="text-xs text-gray-400">
            {session?.user?.unitName || "Jednostka"}
          </p>
          <p className="text-xs text-gray-500">
            {session?.user?.role === "ADMINISTRATOR" ? "Administrator" : "Dowódca"}
          </p>
        </div>
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="flex w-full items-center gap-2 rounded-lg bg-gray-800 px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
        >
          <LogOut className="h-4 w-4" />
          Wyloguj
        </button>
      </div>
    </div>
  );
}
