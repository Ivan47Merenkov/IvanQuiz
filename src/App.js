import React, { useState } from 'react';
import './App.css';
import Question from './components/Question';
import Results from './components/Results';

const questionsData = [
  {
    id: 1,
    question: "Какое у него отчество?",
    answers: ["Васильевич", "Иванович", "Алексеевич", "Русланович", "Нурланович"],
    correctAnswer: "Васильевич"
  },
  {
    id: 2,
    question: "Какой его любимый футбольный клуб?",
    answers: ["Манчестер Сити", "Барселона", "Реал Мадрид", "Ливерпуль", "Пари-Сен-Жермен"],
    correctAnswer: "Реал Мадрид"
  },
  {
    id: 3,
    question: "Какой его любимый цвет?",
    answers: ["Красный", "Золотой", "Белый", "Фиолетовый", "Оранжевый"],
    correctAnswer: "Фиолетовый"
  },
  {
    id: 4,
    question: "Какое у него хобби?",
    answers: ["Брейк-данс", "Футбол", "Программирование", "Плавание", "Бисероплетение"],
    correctAnswer: "Футбол"
  },
  {
    id: 5,
    question: "Какая его любимая машина?",
    answers: ["BMW M5 F92 Competition", "Mazda RX7 Veilside", "Mercedes AMG GT 63", "Nissan Skyline GT-R35", "Hyundai Sonata 2024"],
    correctAnswer: "Hyundai Sonata 2024"
  }
];

const App = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [incorrectAnswers, setIncorrectAnswers] = useState([]);

  const handleAnswerSelected = (isCorrect, selectedAnswer) => {
    if (isCorrect) {
      setCorrectAnswersCount(correctAnswersCount + 1);
    } else {
      setIncorrectAnswers([...incorrectAnswers, {
        question: questionsData[currentQuestionIndex].question,
        correctAnswer: questionsData[currentQuestionIndex].correctAnswer,
        selectedAnswer
      }]);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questionsData.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setQuizCompleted(true);
      alert(`Квиз завершён! Вы ответили правильно на ${correctAnswersCount + (isCorrect ? 1 : 0)} из ${questionsData.length}`);
    }
  };

  return (
    <div className="app">
      {!quizCompleted ? (
        <Question
          questionData={questionsData[currentQuestionIndex]}
          onAnswerSelected={handleAnswerSelected}
        />
      ) : (
        <Results 
          correctAnswersCount={correctAnswersCount} 
          totalQuestions={questionsData.length} 
          incorrectAnswers={incorrectAnswers}
        />
      )}
    </div>
  );
};

export default App;