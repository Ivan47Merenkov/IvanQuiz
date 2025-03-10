import React, { useState } from 'react';

const Question = ({ questionData, onAnswerSelected }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleSubmit = () => {
    if (selectedAnswer === questionData.correctAnswer) {
      onAnswerSelected(true);
    } else {
      onAnswerSelected(false);
    }
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      <div className="answers">
        {questionData.answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              name={questionData.id}
              value={answer}
              checked={selectedAnswer === answer}
              onChange={handleAnswerChange}
            />
            <label>{answer}</label>
          </div>
        ))}
      </div>
      <button className="submit-btn" onClick={handleSubmit}>Ответить</button>
    </div>
  );
};

export default Question;