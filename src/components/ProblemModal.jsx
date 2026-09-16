import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, Code2, Sparkles, Clock, HardDrive } from 'lucide-react';
import Visualizer from './Visualizer';

export default function ProblemModal({ problem, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState(problem?.visualizerData ? 'visualizer' : 'code');

  if (!problem) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(problem.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-800 pb-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className="text-xs font-mono font-bold text-gray-400">
                LC #{problem.lcNumber}
              </span>
              <span className={`difficulty-badge difficulty-${problem.difficulty}`}>
                {problem.difficulty}
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                {problem.pattern}
              </span>
              <span className="text-xs text-gray-400">Day {problem.day}</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">{problem.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-white transition"
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-3 mb-4">
          {problem.visualizerData && (
            <button
              onClick={() => setActiveTab('visualizer')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
                activeTab === 'visualizer'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'bg-gray-800/60 text-gray-400 hover:text-white'
              }`}
            >
              <Sparkles size={16} /> Visualizer
            </button>
          )}
          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold transition ${
              activeTab === 'code'
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/40'
                : 'bg-gray-800/60 text-gray-400 hover:text-white'
            }`}
          >
            <Code2 size={16} /> JavaScript Solution
          </button>
        </div>

        {/* Content Body */}
        {activeTab === 'visualizer' ? (
          <Visualizer problem={problem} onClose={onClose} />
        ) : (
          <div>
            {/* Complexity Metrics */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 flex items-center gap-3">
                <Clock className="text-indigo-400" size={20} />
                <div>
                  <div className="text-xs text-gray-400">Time Complexity</div>
                  <div className="font-mono font-bold text-white text-sm">{problem.timeComplexity}</div>
                </div>
              </div>
              <div className="bg-gray-900/80 border border-gray-800 rounded-xl p-3 flex items-center gap-3">
                <HardDrive className="text-emerald-400" size={20} />
                <div>
                  <div className="text-xs text-gray-400">Space Complexity</div>
                  <div className="font-mono font-bold text-white text-sm">{problem.spaceComplexity}</div>
                </div>
              </div>
            </div>

            {/* Strategy Summary */}
            <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 mb-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Approach Strategy</h4>
              <p className="text-sm text-gray-300">{problem.summary}</p>
            </div>

            {/* Code Header & Copy Button */}
            <div className="flex items-center justify-between bg-gray-900 px-4 py-2 rounded-t-xl border border-gray-800 border-b-0">
              <span className="text-xs font-mono text-gray-400">JavaScript (ES6)</span>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 text-xs text-indigo-300 hover:text-white bg-indigo-500/10 px-2.5 py-1 rounded transition"
              >
                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                {copied ? 'Copied!' : 'Copy Code'}
              </button>
            </div>

            {/* Code Block */}
            <pre className="bg-gray-950 p-4 rounded-b-xl border border-gray-800 text-sm text-emerald-400 overflow-x-auto">
              <code>{problem.code}</code>
            </pre>

            <div className="mt-6 flex justify-end">
              <a
                href={problem.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-bold px-5 py-2.5 rounded-xl transition"
              >
                Solve on LeetCode <ExternalLink size={16} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
