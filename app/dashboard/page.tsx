"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MONTHS = [
  "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec",
  "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"
];

const SHIFT_COLORS = {
  1: "bg-red-500",
  2: "bg-yellow-500",
  3: "bg-blue-500",
};

export default function DashboardPage() {
  const { data: session } = useSession();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Adjust so Monday is 0
  };

  // Mock shift schedule (24/48 pattern)
  const getShiftForDay = (day: number, month: number) => {
    const totalDays = day + month * 31;
    const cycle = totalDays % 6;
    if (cycle === 0 || cycle === 1) return 1;
    if (cycle === 2 || cycle === 3) return 2;
    if (cycle === 4 || cycle === 5) return 3;
    return null;
  };

  return (
    <div className="p-8">
      {/* Welcome bubble */}
      <div className="mb-8 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 p-6 text-white shadow-lg">
        <h1 className="text-3xl font-bold">
          Witaj, {session?.user?.name}! 👋
        </h1>
        <p className="mt-2 text-red-50">
          {session?.user?.unitName || "Jednostka"} •{" "}
          {session?.user?.role === "ADMINISTRATOR" ? "Administrator" : "Dowódca"}
        </p>
      </div>

      {/* Year calendar */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            Kalendarz służb {currentYear}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentYear(currentYear - 1)}
              className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setCurrentYear(currentYear + 1)}
              className="rounded-lg bg-gray-100 p-2 hover:bg-gray-200"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="mb-6 flex gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-red-500"></div>
            <span>Zmiana 1</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-yellow-500"></div>
            <span>Zmiana 2</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 rounded bg-blue-500"></div>
            <span>Zmiana 3</span>
          </div>
        </div>

        {/* 12 months grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MONTHS.map((monthName, monthIndex) => {
            const daysInMonth = getDaysInMonth(monthIndex, currentYear);
            const firstDay = getFirstDayOfMonth(monthIndex, currentYear);
            const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

            return (
              <div key={monthIndex} className="rounded-lg border border-gray-200 p-4">
                <h3 className="mb-3 text-center font-semibold text-gray-700">
                  {monthName}
                </h3>
                <div className="grid grid-cols-7 gap-1 text-xs">
                  {/* Day headers */}
                  {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((day) => (
                    <div
                      key={day}
                      className="text-center font-medium text-gray-500"
                    >
                      {day}
                    </div>
                  ))}
                  {/* Empty cells for offset */}
                  {Array.from({ length: firstDay }).map((_, i) => (
                    <div key={`empty-${i}`}></div>
                  ))}
                  {/* Days */}
                  {days.map((day) => {
                    const shift = getShiftForDay(day, monthIndex);
                    const isToday =
                      day === new Date().getDate() &&
                      monthIndex === new Date().getMonth() &&
                      currentYear === new Date().getFullYear();

                    return (
                      <div
                        key={day}
                        className={`
                          aspect-square flex items-center justify-center rounded
                          ${shift ? SHIFT_COLORS[shift as keyof typeof SHIFT_COLORS] : "bg-gray-100"}
                          ${shift ? "text-white font-semibold" : "text-gray-700"}
                          ${isToday ? "ring-2 ring-green-500" : ""}
                        `}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
