import React from 'react';

const Results = ({ correctAnswersCount, totalQuestions, incorrectAnswers }) => {
  return (
    <div className="results">
      <h2>Результаты:</h2>
      <p>Вы ответили правильно на {correctAnswersCount} из {totalQuestions} вопросов.</p>
      {correctAnswersCount === totalQuestions ? (
        <p>Отлично! Вы действительно хорошо знаете Ивана!</p>
      ) : (
        <p>Есть, над чем поработать, но вы молодец!</p>
      )}

      {}
      {incorrectAnswers.length > 0 && (
        <div className="incorrect-answers">
          <h3>Вы ошиблись в следующих вопросах:</h3>
          <ul>
            {incorrectAnswers.map((answer, index) => (
              <li key={index}>
                <strong>{answer.question}</strong><br />
                <em>Правильный ответ: {answer.correctAnswer}</em>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Results;