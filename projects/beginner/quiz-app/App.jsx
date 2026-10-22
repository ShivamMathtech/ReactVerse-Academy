import Quiz from '../../../src/components/learning/Quiz';
const questions = [
  {
    id: 'q1',
    question: 'Which update uses the previous state safely?',
    options: ['setCount(n => n + 1)', 'count++', 'setCount = 1'],
    correct: 0,
    explanation: 'The functional updater receives the pending previous value.',
  },
  {
    id: 'q2',
    question: 'Which array operation keeps only matching items?',
    options: ['map', 'filter', 'reduce'],
    correct: 1,
    explanation: 'filter selects records and returns a new array.',
  },
  {
    id: 'q3',
    question: 'Which is the stable key for a saved task?',
    options: ['Its array index', 'Math.random()', 'Its persistent ID'],
    correct: 2,
    explanation: 'A saved ID follows the task through insertions and sorting.',
  },
];
export default function App() {
  return (
    <div className="panel">
      <Quiz questions={questions} />
    </div>
  );
}
