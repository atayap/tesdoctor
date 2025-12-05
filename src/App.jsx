import React, { useState } from 'react';
import { questionBank, categoryColors, difficultyColors } from './data/questionBank';
import { useExamEngine } from './hooks/useExamEngine';
import { DNABackground, MedicalIcon } from './components/DNABackground';
import { CircularTimer } from './components/CircularTimer';
import { OptionCard, NavButton, StatCard, QuestionNavigator, ResultModal } from './components/UIComponents';

function App() {
  const [view, setView] = useState('home');
  const [sessionKey, setSessionKey] = useState(0);
  const engine = useExamEngine(questionBank);
  const { currentQuestion, currentIndex, answers, submitted, stats, total, showExplanation, setShowExplanation } = engine;

  const startExam = () => {
    engine.resetExam();
    setSessionKey(prev => prev + 1);
    setView('exam');
  };

  const handleTimeout = () => {
    if (!submitted) engine.submitExam();
  };

  const handleReset = () => {
    engine.resetExam();
    setSessionKey(prev => prev + 1);
  };

  // Home View
  if (view === 'home') {
    return (
      <div className="min-h-screen relative text-slate-200">
        <DNABackground />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
          {/* Header */}
          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-3 bg-slate-800/50 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
              <span className="text-sm text-slate-300">Platform Ujian Terakreditasi</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-gradient">MedExam</span>
              <span className="text-white"> Pro</span>
            </h1>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Platform simulasi ujian kompetensi dokter, 
              Dibuat oleh Ataya Fikri
            </p>
          </header>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <StatCard icon="📚" value="500+" label="Bank Soal" color="from-cyan-500 to-blue-500" />
            <StatCard icon="👨‍⚕️" value="12K+" label="Peserta Aktif" color="from-emerald-500 to-teal-500" />
            <StatCard icon="🎯" value="89%" label="Tingkat Kelulusan" color="from-purple-500 to-pink-500" />
            <StatCard icon="⭐" value="4.9" label="Rating" color="from-amber-500 to-orange-500" />
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: '🧠', title: 'Adaptive Learning', desc: 'Sistem menyesuaikan tingkat kesulitan berdasarkan performa Anda' },
              { icon: '📊', title: 'Analitik Detail', desc: 'Lacak progress dan identifikasi area yang perlu ditingkatkan' },
              { icon: '💡', title: 'Penjelasan Lengkap', desc: 'Setiap jawaban dilengkapi penjelasan dan referensi klinis' }
            ].map((f, i) => (
              <div key={i} className="glass-dark rounded-2xl p-6 hover-lift">
                <span className="text-4xl mb-4 block">{f.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{f.title}</h3>
                <p className="text-slate-400">{f.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={startExam}
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold text-lg hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
            >
              <span>Mulai Ujian Sekarang</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
            <p className="text-slate-500 text-sm mt-4">{questionBank.length} soal • 15 menit • Semua kategori</p>
          </div>
        </div>
      </div>
    );
  }

  // Exam View
  return (
    <div className="min-h-screen relative text-slate-200">
      <DNABackground />
      
      {/* Result Modal */}
      {submitted && (
        <ResultModal stats={stats} total={total} onReset={handleReset} />
      )}
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {/* Top Bar */}
        <header className="glass-dark rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <MedicalIcon />
              <span className="text-xl font-bold text-gradient">MedExam Pro</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400">Mode CBT</span>
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 pulse-dot"></span>
                Live
              </span>
            </div>
          </div>
          <button
            onClick={() => setView('home')}
            className="px-4 py-2 rounded-xl bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-all text-sm"
          >
            ← Kembali
          </button>
        </header>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Question Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* Question Card */}
            <div className="glass-dark rounded-3xl p-6 md:p-8 glow-cyan">
              {/* Question Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{currentQuestion.icon}</span>
                  <div>
                    <p className="text-sm text-slate-400">Soal {currentIndex + 1} dari {total}</p>
                    <h2 className={`text-xl font-semibold bg-gradient-to-r ${categoryColors[currentQuestion.category]} bg-clip-text text-transparent`}>
                      {currentQuestion.category}
                    </h2>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${difficultyColors[currentQuestion.level]}`}>
                  {currentQuestion.level}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <p className="text-lg text-slate-200 leading-relaxed mb-8">
                {currentQuestion.question}
              </p>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQuestion.options.map((option, idx) => (
                  <OptionCard
                    key={idx}
                    index={idx}
                    text={option}
                    selected={answers[currentQuestion.id] === idx}
                    correct={idx === currentQuestion.answer}
                    showResult={showExplanation}
                    onClick={() => engine.handleChoice(idx)}
                  />
                ))}
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-5 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">💡</span>
                    <h4 className="font-semibold text-blue-400">Penjelasan</h4>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex flex-wrap items-center gap-3">
                <NavButton onClick={() => engine.navigate(-1)} disabled={currentIndex === 0}>
                  ← Sebelumnya
                </NavButton>
                <NavButton onClick={() => engine.navigate(1)} disabled={currentIndex === total - 1}>
                  Berikutnya →
                </NavButton>
                <div className="flex-1"></div>
                {answers[currentQuestion.id] !== undefined && !showExplanation && (
                  <NavButton onClick={() => setShowExplanation(true)}>
                    Lihat Jawaban
                  </NavButton>
                )}
                {!submitted && (
                  <NavButton onClick={engine.submitExam} primary>
                    Selesai & Submit
                  </NavButton>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timer Card */}
            <div className="glass-dark rounded-3xl p-6 glow-blue">
              <div className="flex items-center justify-between mb-5">
                <h3 className="text-lg font-semibold text-white">⏱️ Waktu Ujian</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400">
                  Active
                </span>
              </div>
              <CircularTimer
                key={sessionKey}
                duration={15 * 60}
                active={!submitted}
                onExpire={handleTimeout}
              />
            </div>

            {/* Navigator Card */}
            <div className="glass-dark rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">📋 Navigasi Soal</h3>
              <QuestionNavigator
                questions={questionBank}
                answers={answers}
                currentIndex={currentIndex}
                submitted={submitted}
                onJump={engine.jumpTo}
              />
              <div className="flex flex-wrap gap-3 mt-4 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-cyan-500/30 border border-cyan-500/50"></span>
                  Dijawab
                </span>
                <span className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded bg-slate-700/50 border border-slate-600/50"></span>
                  Belum
                </span>
              </div>
            </div>

            {/* Stats Card */}
            <div className="glass-dark rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">📊 Statistik</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-white font-medium">{stats.answered}/{total}</span>
                  </div>
                  <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                      style={{ width: `${(stats.answered / total) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="bg-emerald-500/10 rounded-xl p-3">
                    <p className="text-xl font-bold text-emerald-400">{stats.correct}</p>
                    <p className="text-xs text-slate-400">Benar</p>
                  </div>
                  <div className="bg-red-500/10 rounded-xl p-3">
                    <p className="text-xl font-bold text-red-400">{stats.incorrect}</p>
                    <p className="text-xs text-slate-400">Salah</p>
                  </div>
                  <div className="bg-slate-500/10 rounded-xl p-3">
                    <p className="text-xl font-bold text-slate-400">{stats.unanswered}</p>
                    <p className="text-xs text-slate-400">Kosong</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="glass-dark rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-white mb-4">⚡ Aksi Cepat</h3>
              <div className="space-y-3">
                <button
                  onClick={handleReset}
                  className="w-full py-3 rounded-xl bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 transition-all flex items-center justify-center gap-2"
                >
                  🔄 Reset Ujian
                </button>
                <button
                  onClick={engine.submitExam}
                  disabled={submitted}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ✅ Submit Jawaban
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
