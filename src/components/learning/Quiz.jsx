import { useState } from 'react';
export default function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [finished, setFinished] = useState(false);
  if (!questions.length) return <p>No questions are available for this selection.</p>;
  const question = questions[index];
  const selected = answers[question.id];
  const answered = selected !== undefined;
  const score = questions.filter((q) => answers[q.id] === q.correct).length;
  function retry() {
    setIndex(0);
    setAnswers({});
    setFinished(false);
  }
  return (
    <section className="quiz" aria-label="Knowledge check">
      {finished ? (
        <>
          <p className="eyebrow">ASSESSMENT COMPLETE</p>
          <h3>
            Your score: {score} / {questions.length}
          </h3>
          <p>
            {score === questions.length
              ? 'All correct. Try explaining one answer without looking.'
              : 'Review the explanations, then try again.'}
          </p>
          <button onClick={retry}>Retry quiz</button>
        </>
      ) : (
        <>
          <p className="eyebrow">
            QUESTION {index + 1} OF {questions.length}
          </p>
          <h3>{question.question}</h3>
          <div className="quiz-options">
            {question.options.map((option, i) => (
              <button
                key={option}
                className={`quiz-option ${answered && i === question.correct ? 'correct' : ''} ${answered && selected === i && i !== question.correct ? 'incorrect' : ''}`}
                disabled={answered}
                aria-pressed={selected === i}
                onClick={() => setAnswers((a) => ({ ...a, [question.id]: i }))}
              >
                <span aria-hidden="true">{String.fromCharCode(65 + i)}</span>
                {option}
              </button>
            ))}
          </div>
          {answered && (
            <div className="quiz-feedback">
              <p role="status">
                <strong>{selected === question.correct ? 'Correct.' : 'Not quite.'}</strong>{' '}
                {question.explanation}
              </p>
              <button
                onClick={() =>
                  index === questions.length - 1 ? setFinished(true) : setIndex((n) => n + 1)
                }
              >
                {index === questions.length - 1 ? 'See score' : 'Next question'}
              </button>
            </div>
          )}
        </>
      )}
    </section>
  );
}
