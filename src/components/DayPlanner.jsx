import React from 'react';
import { Calendar, CheckCircle2 } from 'lucide-react';

export default function DayPlanner({ activeDay, onSelectDay, problems, completedIds }) {
  const days = [
    { number: 0, label: "All Days", desc: "Show All (22)" },
    { number: 1, label: "Day 1", desc: "Basics & Warmup" },
    { number: 2, label: "Day 2", desc: "Array Operations" },
    { number: 3, label: "Day 3", desc: "Water & Sequences" },
    { number: 4, label: "Day 4", desc: "3Sum & 4Sum" },
    { number: 5, label: "Day 5", desc: "Sorting & Merging" },
    { number: 6, label: "Day 6", desc: "Boats & Backspace" },
    { number: 7, label: "Day 7", desc: "Rain Water & Cycle" }
  ];

  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-2xl p-4 mb-6 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400">
          <Calendar size={16} />
          <span>7-Day Practice Roadmap</span>
        </div>
        <span className="text-xs text-gray-400 font-mono">
          Click any day to filter questions
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5">
        {days.map((day) => {
          const isSelected = activeDay === day.number;
          const dayProblems = day.number === 0 ? problems : problems.filter(p => p.day === day.number);
          const dayCompleted = dayProblems.filter(p => completedIds.includes(p.id)).length;
          const totalInDay = dayProblems.length;
          const isFullyDone = totalInDay > 0 && dayCompleted === totalInDay;

          return (
            <button
              key={day.number}
              onClick={() => onSelectDay(day.number)}
              className={`min-h-[72px] p-3 rounded-xl border text-left transition flex flex-col justify-between items-stretch ${
                isSelected
                  ? 'bg-indigo-600/25 border-indigo-500 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-500'
                  : 'bg-gray-900/90 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white hover:bg-gray-800/60'
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="font-bold text-sm text-white">{day.label}</span>
                {isFullyDone && day.number > 0 ? (
                  <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                ) : null}
              </div>

              <div className="flex items-center justify-between w-full mt-1.5 pt-1.5 border-t border-gray-800/60 text-[11px]">
                <span className="text-gray-400 truncate max-w-[70px]">{day.desc}</span>
                {day.number > 0 && (
                  <span className="font-mono font-semibold text-indigo-300">
                    {dayCompleted}/{totalInDay}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
