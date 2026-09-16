import React, { useState, useEffect } from 'react';
import { PROBLEMS_DATA } from './data/problemsData';
import ProblemCard from './components/ProblemCard';
import ProblemModal from './components/ProblemModal';
import DayPlanner from './components/DayPlanner';
import { Search, Trophy, Layers, Sparkles, BookOpen, Filter } from 'lucide-react';

export default function App() {
  const [completedIds, setCompletedIds] = useState(() => {
    const saved = localStorage.getItem('dsa_two_pointer_completed');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedProblem, setSelectedProblem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [selectedPattern, setSelectedPattern] = useState('All');
  const [selectedDay, setSelectedDay] = useState(0);

  useEffect(() => {
    localStorage.setItem('dsa_two_pointer_completed', JSON.stringify(completedIds));
  }, [completedIds]);

  const toggleComplete = (id) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const totalCount = PROBLEMS_DATA.length;
  const completedCount = completedIds.length;
  const progressPercent = Math.round((completedCount / totalCount) * 100);

  const patterns = ['All', 'Left + Right', 'Slow + Fast', 'Two Arrays', 'Multi-Pointer', 'Fast & Slow'];

  const filteredProblems = PROBLEMS_DATA.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      problem.lcNumber.toString().includes(searchQuery);

    const matchesDifficulty =
      selectedDifficulty === 'All' || problem.difficulty === selectedDifficulty;

    const matchesPattern =
      selectedPattern === 'All' || problem.pattern === selectedPattern;

    const matchesDay =
      selectedDay === 0 || problem.day === selectedDay;

    return matchesSearch && matchesDifficulty && matchesPattern && matchesDay;
  });

  return (
    <div className="app-container">
      {/* Header Glassmorphism Banner with Custom 3D Logo */}
      <header className="header-glass">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-start gap-5 flex-1">
            {/* Custom 3D Two Pointer Title Image */}
            <img
              src="/logo.jpg"
              alt="Two Pointer DSA Logo"
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/25 object-cover shrink-0"
            />
            <div>
              <div className="title-badge">
                <Sparkles size={15} /> Two Pointer Pattern Mastery
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
                JavaScript DSA Practice Sheet
              </h1>
              <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
                Master the 4 core Two Pointer algorithms (Left+Right, Slow+Fast, Two Arrays, Multi-Pointer) with step-by-step visualizers, optimal JS solutions, and 7-day roadmap.
              </p>
            </div>
          </div>

          {/* Stats Box */}
          <div className="bg-gray-900/90 border border-gray-800 rounded-2xl p-4 sm:p-5 min-w-[280px] shadow-lg shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                <Trophy size={16} className="text-amber-400" /> Overall Progress
              </span>
              <span className="text-sm font-bold font-mono text-indigo-400">
                {completedCount} / {totalCount} ({progressPercent}%)
              </span>
            </div>

            <div className="progress-bar-track mb-3">
              <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }} />
            </div>

            <div className="grid grid-cols-3 gap-1 text-center text-xs text-gray-400 pt-2.5 border-t border-gray-800">
              <div className="bg-emerald-500/10 border border-emerald-500/20 py-1 px-1.5 rounded text-emerald-400 font-semibold">
                Easy: {PROBLEMS_DATA.filter(p => p.difficulty==='Easy' && completedIds.includes(p.id)).length}/{PROBLEMS_DATA.filter(p => p.difficulty==='Easy').length}
              </div>
              <div className="bg-amber-500/10 border border-amber-500/20 py-1 px-1.5 rounded text-amber-400 font-semibold">
                Med: {PROBLEMS_DATA.filter(p => p.difficulty==='Medium' && completedIds.includes(p.id)).length}/{PROBLEMS_DATA.filter(p => p.difficulty==='Medium').length}
              </div>
              <div className="bg-rose-500/10 border border-rose-500/20 py-1 px-1.5 rounded text-rose-400 font-semibold">
                Hard: {PROBLEMS_DATA.filter(p => p.difficulty==='Hard' && completedIds.includes(p.id)).length}/{PROBLEMS_DATA.filter(p => p.difficulty==='Hard').length}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* 7-Day Roadmap Bar */}
      <DayPlanner
        activeDay={selectedDay}
        onSelectDay={setSelectedDay}
        problems={PROBLEMS_DATA}
        completedIds={completedIds}
      />

      {/* Unified Toolbar */}
      <div className="bg-gray-900/50 border border-gray-800/80 rounded-2xl p-4 mb-6 space-y-4">
        {/* Row 1: Search & Difficulty */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" size={17} />
            <input
              type="text"
              placeholder="Search by title or LC # (e.g. 125, Palindrome)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900 border border-gray-800 rounded-xl pl-10 pr-4 h-11 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
            />
          </div>

          {/* Difficulty Segmented Control */}
          <div className="flex items-center gap-1 bg-gray-900 p-1 rounded-xl border border-gray-800 h-11">
            <span className="text-xs font-bold text-gray-400 px-2 uppercase tracking-wider hidden sm:inline-flex items-center gap-1">
              <Filter size={13} /> Level:
            </span>
            {['All', 'Easy', 'Medium', 'Hard'].map((diff) => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(diff)}
                className={`filter-btn h-9 ${selectedDifficulty === diff ? 'active' : ''}`}
              >
                {diff}
              </button>
            ))}
          </div>
        </div>

        {/* Row 2: Pattern Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pt-1 border-t border-gray-800/60">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1 mr-2 shrink-0">
            <Layers size={14} className="text-cyan-400" /> Pattern:
          </span>
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            {patterns.map((pattern) => (
              <button
                key={pattern}
                onClick={() => setSelectedPattern(pattern)}
                className={`filter-btn h-8 text-xs whitespace-nowrap ${selectedPattern === pattern ? 'active' : ''}`}
              >
                {pattern}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      {filteredProblems.length > 0 ? (
        <div className="cards-grid">
          {filteredProblems.map((problem) => (
            <ProblemCard
              key={problem.id}
              problem={problem}
              isCompleted={completedIds.includes(problem.id)}
              onToggleComplete={toggleComplete}
              onSelectCode={setSelectedProblem}
              onSelectVisualizer={(p) => {
                setSelectedProblem(p);
              }}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-900/40 rounded-2xl border border-gray-800">
          <BookOpen size={48} className="mx-auto text-gray-600 mb-3" />
          <h3 className="text-xl font-bold text-white mb-1">No problems found</h3>
          <p className="text-sm text-gray-400">Try adjusting your search query or filter options.</p>
        </div>
      )}

      {/* Solution & Visualizer Modal */}
      {selectedProblem && (
        <ProblemModal
          problem={selectedProblem}
          onClose={() => setSelectedProblem(null)}
        />
      )}
    </div>
  );
}
