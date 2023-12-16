// import React, { useState } from 'react';
// import '../../src/Component/counter.css'

import React, { useState } from 'react';
import '../Component/counter.css'




const Appcount = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  
  const questions = [
    {
      question: 'What is the capital of Pakistan?',
      options: ['Islamabad', 'Karachi', 'Lahore', 'Rawalpindi'],
      correctAnswer: 'Islamabad',
    },
    {
      question: 'What is the result of 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: '4',
    },
    {
      question: 'What is the national language of Pakistan?',
      options: ['Urdu', 'English', 'Punjabi', 'Sindhi'],
      correctAnswer: 'Urdu',
    },
  ];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      {quizFinished ? (
        <>
          <p>Quiz finished! Final score: {score}/{questions.length}</p>
          <button className="play-again-btn" onClick={resetQuiz}>Play Again</button>
        </>
      ) : (
        <>
          <p className="question-text">Question {currentQuestion + 1}: {questions[currentQuestion].question}</p>
          {questions[currentQuestion].options.map((option, index) => (
            <button key={index} className="answer-btn" onClick={() => handleAnswer(option)}>{option}</button>
          ))}
          <p className="score-text">Score: {score}/{questions.length}</p>
        </>
      )}

    </div>
  );
};

export default Appcount;
