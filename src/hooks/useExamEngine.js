import { useState, useMemo, useCallback } from 'react';

export function useExamEngine(questions) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = useMemo(() => questions[currentIndex], [questions, currentIndex]);

  const stats = useMemo(() => {
    const answered = Object.keys(answers).length;
    const correct = questions.reduce((acc, q) => answers[q.id] === q.answer ? acc + 1 : acc, 0);
    const incorrect = answered - correct;
    const unanswered = questions.length - answered;
    const percentage = answered > 0 ? Math.round((correct / answered) * 100) : 0;
    return { answered, correct, incorrect, unanswered, percentage };
  }, [answers, questions]);

  const handleChoice = useCallback((choiceIdx) => {
    if (!submitted) {
      setAnswers(prev => ({ ...prev, [currentQuestion.id]: choiceIdx }));
    }
  }, [currentQuestion, submitted]);

  const navigate = useCallback((direction) => {
    setCurrentIndex(prev => {
      const next = prev + direction;
      return next >= 0 && next < questions.length ? next : prev;
    });
    setShowExplanation(false);
  }, [questions.length]);

  const jumpTo = useCallback((index) => {
    if (index >= 0 && index < questions.length) {
      setCurrentIndex(index);
      setShowExplanation(false);
    }
  }, [questions.length]);

  const submitExam = useCallback(() => setSubmitted(true), []);
  
  const resetExam = useCallback(() => {
    setAnswers({});
    setCurrentIndex(0);
    setSubmitted(false);
    setShowExplanation(false);
  }, []);

  return {
    currentQuestion,
    currentIndex,
    answers,
    submitted,
    stats,
    total: questions.length,
    showExplanation,
    setShowExplanation,
    handleChoice,
    navigate,
    jumpTo,
    submitExam,
    resetExam
  };
}