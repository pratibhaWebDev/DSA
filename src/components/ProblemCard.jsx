import React from 'react';
import { ExternalLink, CheckCircle2, Circle, Code2, Sparkles } from 'lucide-react';

export default function ProblemCard({ problem, isCompleted, onToggleComplete, onSelectCode, onSelectVisualizer }) {
  return (
    <div className={`problem-card ${isCompleted ? 'completed' : ''}`}>
      {/* Top Section */}
      <div>
        {/* Header Bar */}
        <div className="flex items-center justify-between h-7 mb-2">
          <span className="text-xs font-mono font-bold text-gray-400">
            LC #{problem.lcNumber}
          </span>
          <div className="flex items-center gap-1.5">
            <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
              {problem.difficulty}
            </span>
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Day {problem.day}
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="min-h-[52px] flex items-center mb-2">
          <h3 className="font-bold text-base sm:text-lg text-white leading-snug hover:text-indigo-300 transition">
            {problem.title}
          </h3>
        </div>

        {/* Summary Description */}
        <div className="min-h-[38px] mb-3">
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">
            {problem.summary}
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div>
        {/* Pattern & Complexity Bar */}
        <div className="flex items-center justify-between py-2 border-t border-b border-gray-800/80 mb-3 text-xs">
          <span className="font-mono text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40 font-semibold">
            {problem.pattern}
          </span>
          <span className="font-mono text-gray-300 font-semibold bg-gray-800/60 px-2 py-0.5 rounded">
            {problem.timeComplexity}
          </span>
        </div>

        {/* Action Row */}
        <div className="flex items-center justify-between gap-2 h-9">
          <button
            onClick={() => onToggleComplete(problem.id)}
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-lg border transition ${
              isCompleted
                ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30'
                : 'bg-gray-800/80 text-gray-300 border-gray-700 hover:bg-gray-700'
            }`}
          >
            {isCompleted ? <CheckCircle2 size={15} /> : <Circle size={15} />}
            {isCompleted ? 'Completed' : 'Mark Done'}
          </button>

          <div className="flex items-center gap-1.5">
            {problem.visualizerData && (
              <button
                onClick={() => onSelectVisualizer(problem)}
                className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500/20 transition flex items-center justify-center"
                title="Watch Interactive Visualizer"
              >
                <Sparkles size={15} />
              </button>
            )}

            <button
              onClick={() => onSelectCode(problem)}
              className="p-2 rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/20 transition flex items-center justify-center"
              title="View JavaScript Solution"
            >
              <Code2 size={15} />
            </button>

            <a
              href={problem.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 transition flex items-center justify-center"
              title="Open LeetCode"
            >
              <ExternalLink size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
