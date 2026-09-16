"use client";

import { useState } from "react";
import Badge from "./Badge";

export type ScheduleRow = { time: string; level: "TODOS" | "INIC" | "AVAN"; course: string; coach: string };

export default function Schedule({ days, schedule }: { days: string[]; schedule: Record<string, ScheduleRow[]> }) {
  const [day, setDay] = useState(days[0]);
  const rows = schedule[day] ?? [];

  return (
    <div className="rounded-lg border border-sm-cream-dark bg-white p-5">
      <div className="flex flex-wrap gap-2.5">
        {days.map((d) => {
          const isActive = d === day;
          return (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={`min-h-11 cursor-pointer rounded-pill px-[18px] py-2.5 text-sm font-medium transition-colors duration-150 ease-standard active:scale-[0.97] ${
                isActive
                  ? "border border-sm-gold bg-sm-gold text-white"
                  : "border border-sm-cream-dark bg-white text-sm-ink hover:bg-sm-cream"
              }`}
            >
              {d}
            </button>
          );
        })}
      </div>
      <div className="mt-5 overflow-hidden rounded-md border border-sm-cream-dark">
        {rows.length ? (
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-sm-cream-dark">
                {["Hora", "Nível", "Aula", "Professor"].map((h) => (
                  <th key={h} className="px-[18px] py-3.5 text-left font-semibold text-sm-ink">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-sm-cream-dark last:border-b-0">
                  <td className="px-[18px] py-4 text-sm-ink">{r.time}</td>
                  <td className="px-[18px] py-4">
                    <Badge level={r.level} />
                  </td>
                  <td className="px-[18px] py-4 text-sm-ink">{r.course}</td>
                  <td className="px-[18px] py-4 text-sm-ink">{r.coach}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="px-6 py-6 text-sm text-sm-ink">Sem aulas marcadas.</div>
        )}
      </div>
    </div>
  );
}
