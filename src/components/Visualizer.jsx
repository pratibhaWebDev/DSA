import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export default function Visualizer({ problem, onClose }) {
  const visualData = problem?.visualizerData;

  if (!visualData) {
    return (
      <div className="visualizer-box text-center py-8">
        <Sparkles className="mx-auto mb-2 text-indigo-400 opacity-60" size={32} />
        <p className="text-gray-400">Interactive step animation for this problem is coming soon!</p>
        <p className="text-xs text-gray-500 mt-1">Refer to the JavaScript solution code and strategy breakdown below.</p>
      </div>
    );
  }

  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const steps = visualData.steps;
  const currentStepData = steps[currentStep];

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentStep((prev) => {
          if (prev < steps.length - 1) return prev + 1;
          setIsPlaying(false);
          return prev;
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying, steps.length]);

  return (
    <div className="visualizer-box">
      <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="text-cyan-400" size={20} />
          <h4 className="font-bold text-lg text-white">Algorithm Step Visualizer</h4>
        </div>
        <span className="text-xs font-mono text-gray-400">
          Step {currentStep + 1} of {steps.length}
        </span>
      </div>

      {/* Array Elements Visualizer */}
      <div className="array-container my-6">
        {visualData.initialArray.map((item, idx) => {
          const isLeft = currentStepData.left === idx;
          const isRight = currentStepData.right === idx;
          const isSlow = currentStepData.slow === idx;
          const isFast = currentStepData.fast === idx;

          let itemClass = "array-item";
          if (isLeft) itemClass += " active-left";
          if (isRight) itemClass += " active-right";
          if (isSlow) itemClass += " active-slow";
          if (isFast) itemClass += " active-fast";

          return (
            <div key={idx} className={itemClass}>
              <span>{item}</span>
              {isLeft && <div className="pointer-badge pointer-left">L</div>}
              {isRight && <div className="pointer-badge pointer-right">R</div>}
              {isSlow && <div className="pointer-badge pointer-slow">Slow</div>}
              {isFast && <div className="pointer-badge pointer-fast">Fast</div>}
            </div>
          );
        })}
      </div>

      {/* Comment Box */}
      <div className="bg-gray-900/90 border border-gray-800 rounded-xl p-3 mb-5 font-mono text-sm text-cyan-300 min-h-[48px] flex items-center justify-between">
        <span>💡 {currentStepData.comment}</span>
        {currentStepData.status === "success" && (
          <span className="bg-emerald-500/20 text-emerald-400 text-xs px-2 py-1 rounded font-sans font-bold">
            ✓ Done
          </span>
        )}
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => { setIsPlaying(false); setCurrentStep(0); }}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 transition"
          title="Reset"
        >
          <RotateCcw size={18} />
        </button>
        <button
          onClick={() => { setIsPlaying(false); setCurrentStep(prev => Math.max(0, prev - 1)); }}
          disabled={currentStep === 0}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-40 transition"
          title="Previous Step"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-2 transition"
        >
          {isPlaying ? <><Pause size={18} /> Pause</> : <><Play size={18} /> Auto Play</>}
        </button>
        <button
          onClick={() => { setIsPlaying(false); setCurrentStep(prev => Math.min(steps.length - 1, prev + 1)); }}
          disabled={currentStep === steps.length - 1}
          className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 disabled:opacity-40 transition"
          title="Next Step"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
