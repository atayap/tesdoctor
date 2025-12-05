import React from 'react';

export function OptionCard({ index, text, selected, correct, showResult, onClick }) {
  const label = String.fromCharCode(65 + index);
  const isCorrect = showResult && correct;
  const isWrong = showResult && selected && !correct;
  
  let borderColor = 'border-slate-600/50';
  let bgColor = 'bg-slate-800/30';
  
  if (selected && !showResult) {
    borderColor = 'border-cyan-500';
    bgColor = 'bg-cyan-500/10';
  } else if (isCorrect) {
    borderColor = 'border-emerald-500';
    bgColor = 'bg-emerald-500/10';
  } else if (isWrong) {
    borderColor = 'border-red-500';
    bgColor = 'bg-red-500/10';
  }

  return (
    <button
      onClick={onClick}
      disabled={showResult}
      className={`w-full text-left p-4 rounded-2xl border-2 transition-all duration-300 hover-lift ${borderColor} ${bgColor} ${showResult ? 'cursor-default' : 'hover:border-cyan-400'}`}
    >
      <div className="flex items-start gap-4">
        <span className={`w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all ${
          selected ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white' :
          isCorrect ? 'bg-emerald-500 text-white' :
          isWrong ? 'bg-red-500 text-white' :
          'bg-slate-700/50 text-slate-400'
        }`}>
          {isCorrect ? '✓' : isWrong ? '✗' : label}
        </span>
        <span className={`flex-1 leading-relaxed ${selected ? 'text-white' : 'text-slate-300'}`}>
          {text}
        </span>
      </div>
    </button>
  );
}

export function NavButton({ children, onClick, disabled, primary }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
        disabled ? 'opacity-40 cursor-not-allowed' :
        primary ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:shadow-lg hover:shadow-cyan-500/25' :
        'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50'
      }`}
    >
      {children}
    </button>
  );
}

export function StatCard({ icon, value, label, color }) {
  return (
    <div className="glass-dark rounded-2xl p-5 hover-lift">
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-2xl`}>
          {icon}
        </div>
        <div>
          <p className="text-2xl font-bold text-white">{value}</p>
          <p className="text-sm text-slate-400">{label}</p>
        </div>
      </div>
    </div>
  );
}

export function QuestionNavigator({ questions, answers, currentIndex, submitted, onJump }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      {questions.map((q, idx) => {
        const isAnswered = answers[q.id] !== undefined;
        const isCurrent = idx === currentIndex;
        const isCorrect = submitted && answers[q.id] === q.answer;
        const isWrong = submitted && isAnswered && answers[q.id] !== q.answer;
        
        return (
          <button
            key={q.id}
            onClick={() => onJump(idx)}
            className={`aspect-square rounded-xl font-semibold transition-all duration-300 text-sm ${
              isCurrent ? 'bg-gradient-to-br from-cyan-500 to-blue-500 text-white scale-110 shadow-lg' :
              isCorrect ? 'bg-emerald-500/30 text-emerald-400 border border-emerald-500/50' :
              isWrong ? 'bg-red-500/30 text-red-400 border border-red-500/50' :
              isAnswered ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' :
              'bg-slate-700/30 text-slate-400 border border-slate-600/30 hover:border-slate-500'
            }`}
          >
            {idx + 1}
          </button>
        );
      })}
    </div>
  );
}

export function ResultModal({ stats, total, onReset }) {
  const grade = stats.percentage >= 80 ? 'A' : stats.percentage >= 70 ? 'B' : stats.percentage >= 60 ? 'C' : 'D';
  const passed = stats.percentage >= 70;
  
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="glass-dark rounded-3xl p-8 max-w-lg w-full text-center space-y-6 animate-fadeIn">
        <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center text-5xl ${passed ? 'bg-emerald-500/20' : 'bg-red-500/20'}`}>
          {passed ? '🎉' : '📚'}
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-white mb-2">
            {passed ? 'Selamat!' : 'Tetap Semangat!'}
          </h2>
          <p className="text-slate-400">
            {passed ? 'Anda berhasil menyelesaikan ujian dengan baik' : 'Terus berlatih untuk hasil yang lebih baik'}
          </p>
        </div>

        <div className="flex justify-center gap-8">
          <div className="text-center">
            <div className={`text-6xl font-bold ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>
              {grade}
            </div>
            <p className="text-slate-400 text-sm mt-1">Grade</p>
          </div>
          <div className="text-center">
            <div className="text-6xl font-bold text-gradient">{stats.percentage}%</div>
            <p className="text-slate-400 text-sm mt-1">Akurasi</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4">
          <div className="bg-emerald-500/10 rounded-xl p-3">
            <p className="text-2xl font-bold text-emerald-400">{stats.correct}</p>
            <p className="text-xs text-slate-400">Benar</p>
          </div>
          <div className="bg-red-500/10 rounded-xl p-3">
            <p className="text-2xl font-bold text-red-400">{stats.incorrect}</p>
            <p className="text-xs text-slate-400">Salah</p>
          </div>
          <div className="bg-slate-500/10 rounded-xl p-3">
            <p className="text-2xl font-bold text-slate-400">{stats.unanswered}</p>
            <p className="text-xs text-slate-400">Kosong</p>
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
        >
          Ulangi Ujian
        </button>
      </div>
    </div>
  );
}