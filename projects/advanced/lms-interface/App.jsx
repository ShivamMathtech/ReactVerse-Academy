import { useState } from 'react';
import { useStored } from '../../shared/storage';
const courses = [
  {
    id: 'react',
    title: 'React essentials',
    lessons: [
      [
        'Components',
        'A component is a function that describes UI from props and state. Keep rendering pure.',
      ],
      [
        'State',
        'Use state for values the UI must remember between renders. Derive totals from source values.',
      ],
      [
        'Effects',
        'Use Effects to synchronize with external systems and release resources in cleanup.',
      ],
    ],
  },
  {
    id: 'web',
    title: 'Accessible web',
    lessons: [
      ['Semantics', 'Use native buttons for actions and links for navigation. Label every input.'],
      [
        'Keyboard',
        'Verify visible focus and logical order. Test the complete workflow without a mouse.',
      ],
    ],
  },
];
export default function App() {
  const [selected, setSelected] = useState('react');
  const [index, setIndex] = useState(0);
  const [enrolled, setEnrolled, error] = useStored(
    'rv-enrolled',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x === 'string'),
  );
  const [done, setDone, error2] = useStored(
    'rv-lms-done',
    [],
    (v) => Array.isArray(v) && v.every((x) => typeof x === 'string'),
  );
  const course = courses.find((x) => x.id === selected);
  const key = `${selected}-${index}`;
  return (
    <div className="grid">
      <aside>
        {courses.map((c) => (
          <article className="panel" key={c.id}>
            <h2>{c.title}</h2>
            <p>{c.lessons.length} sample lessons</p>
            <button
              onClick={() => {
                setSelected(c.id);
                setIndex(0);
              }}
            >
              Open {c.title}
            </button>
          </article>
        ))}
      </aside>
      <section className="panel">
        <h2>{course.title}</h2>
        {!enrolled.includes(selected) ? (
          <button onClick={() => setEnrolled((a) => [...a, selected])}>Enroll locally</button>
        ) : (
          <>
            <label>
              Lesson
              <select value={index} onChange={(e) => setIndex(Number(e.target.value))}>
                {course.lessons.map((x, i) => (
                  <option key={x[0]} value={i}>
                    {x[0]}
                  </option>
                ))}
              </select>
            </label>
            <h3>{course.lessons[index][0]}</h3>
            <p>{course.lessons[index][1]}</p>
            <button
              aria-pressed={done.includes(key)}
              onClick={() =>
                setDone((a) => (a.includes(key) ? a.filter((x) => x !== key) : [...a, key]))
              }
            >
              {done.includes(key) ? 'Mark incomplete' : 'Complete lesson'}
            </button>
            <p>
              {course.lessons.filter((_, i) => done.includes(`${selected}-${i}`)).length}/
              {course.lessons.length} lessons complete
            </p>
            <progress
              aria-label="Course progress"
              value={course.lessons.filter((_, i) => done.includes(`${selected}-${i}`)).length}
              max={course.lessons.length}
            />
          </>
        )}
        {(error || error2) && <p role="alert">{error || error2}</p>}
      </section>
    </div>
  );
}
