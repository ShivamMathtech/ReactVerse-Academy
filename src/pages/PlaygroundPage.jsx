import { useEffect, useRef, useState } from 'react';
const samples = {
  mapping:
    'const scores = [4, 7, 9];\nconsole.log(scores.map(score => score * 2));\nconsole.log(scores.filter(score => score >= 6));',
  closures:
    'function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst next = makeCounter();\nconsole.log(next(), next());',
  immutability:
    "const task = { title: 'Learn React', done: false };\nconst next = { ...task, done: true };\nconsole.log(task, next);",
};
const workerSource = `onmessage = event => { const logs=[]; const output = (...args) => logs.push(args.map(v=>{try{return typeof v==='string'?v:JSON.stringify(v)??String(v);}catch{return String(v);}}).join(' ').slice(0,4000)); try { const fn=new Function('console',event.data); fn({log:output,table:output,error:output,warn:output}); postMessage({logs:logs.slice(0,100)}); } catch(error) { postMessage({logs:[error.name+': '+error.message]}); } };`;
const sandbox = `<!doctype html><html><head><meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' blob:; worker-src blob:; connect-src 'none'"></head><body><script>let worker; onmessage=event=>{if(event.source!==parent)return; if(worker)worker.terminate();const url=URL.createObjectURL(new Blob([${JSON.stringify(workerSource)}],{type:'application/javascript'}));worker=new Worker(url);URL.revokeObjectURL(url);let timer=setTimeout(()=>{worker.terminate();parent.postMessage({kind:'reactverse-lab',logs:['Execution stopped after 1 second. Check for an infinite loop.']},'*');},1000);worker.onmessage=e=>{clearTimeout(timer);worker.terminate();parent.postMessage({kind:'reactverse-lab',logs:e.data.logs},'*');};worker.onerror=e=>{clearTimeout(timer);worker.terminate();parent.postMessage({kind:'reactverse-lab',logs:[e.message||'Worker failed']},'*');};worker.postMessage(event.data.code);};</script></body></html>`;
export default function PlaygroundPage() {
  const [sample, setSample] = useState('mapping');
  const [code, setCode] = useState(samples.mapping);
  const [logs, setLogs] = useState(['Run the example to see console output.']);
  const [running, setRunning] = useState(false);
  const frame = useRef(null);
  const timer = useRef(null);
  useEffect(() => {
    function receive(event) {
      if (event.source !== frame.current?.contentWindow || event.data?.kind !== 'reactverse-lab')
        return;
      clearTimeout(timer.current);
      setLogs(Array.isArray(event.data.logs) ? event.data.logs : ['No output']);
      setRunning(false);
    }
    window.addEventListener('message', receive);
    return () => {
      window.removeEventListener('message', receive);
      clearTimeout(timer.current);
    };
  }, []);
  function run() {
    setRunning(true);
    setLogs([]);
    frame.current?.contentWindow?.postMessage({ code }, '*');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setLogs([
        'Execution did not finish. Your browser may block the isolated worker. Try a different browser or use the local console for trusted code.',
      ]);
      setRunning(false);
    }, 2000);
  }
  return (
    <>
      <p className="eyebrow">THE JAVASCRIPT PRACTICE LAB</p>
      <h1>Change a line. See what happens.</h1>
      <p className="lead">
        Experiment with synchronous JavaScript in a time-limited worker inside a sandboxed frame.
        JSX, imports, DOM access, storage, and network requests are outside this lab’s scope.
      </p>
      <div className="row toolbar">
        <label>
          Starting example
          <select
            value={sample}
            onChange={(e) => {
              setSample(e.target.value);
              setCode(samples[e.target.value]);
            }}
          >
            {Object.keys(samples).map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>
        </label>
        <button onClick={run} disabled={running}>
          {running ? 'Running…' : 'Run JavaScript'}
        </button>
        <button
          className="secondary"
          onClick={() => {
            setCode(samples[sample]);
            setLogs(['Example reset.']);
          }}
        >
          Reset code
        </button>
      </div>
      <div className="lab-grid">
        <label>
          JavaScript source
          <textarea
            className="code-editor"
            value={code}
            spellCheck={false}
            onChange={(e) => setCode(e.target.value)}
            aria-describedby="lab-tip"
          />
        </label>
        <section className="lab-output">
          <h2>Console output</h2>
          <pre role="status">{logs.length ? logs.join('\n') : 'No console output.'}</pre>
        </section>
      </div>
      <p id="lab-tip" className="muted">
        Use console.log to inspect a value. Async callbacks are not awaited. This is an educational
        execution tool, not a service for running hostile code.
      </p>
      <iframe
        ref={frame}
        title="Isolated JavaScript runtime"
        sandbox="allow-scripts"
        srcDoc={sandbox}
        className="runtime-frame"
      />
    </>
  );
}
