import { useRef, useState } from 'react';
import { Copy, Check } from 'lucide-react';
export default function CodeExample({ children, language = 'code', text }) {
  const pre = useRef(null);
  const [status, setStatus] = useState('');
  async function copy() {
    try {
      await navigator.clipboard.writeText(text ?? pre.current.innerText ?? pre.current.textContent);
      setStatus('Copied');
    } catch {
      setStatus('Clipboard unavailable. Select and copy the code.');
    }
  }
  return (
    <div className="code-example">
      <div className="code-top">
        <span>{language}</span>
        <button onClick={copy} aria-label="Copy code">
          {status === 'Copied' ? <Check size={14} /> : <Copy size={14} />}{' '}
          {status === 'Copied' ? 'Copied' : 'Copy'}
        </button>
      </div>
      <pre ref={pre}>{children ?? <code>{text}</code>}</pre>
      <span className="sr-only" role="status">
        {status}
      </span>
    </div>
  );
}
