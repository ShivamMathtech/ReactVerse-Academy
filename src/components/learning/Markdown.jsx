import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Link } from 'react-router';
import CodeExample from './CodeExample';
import { lessons } from '../../data/curriculum';
function MarkdownLink({ href = '', children }) {
  const lesson = lessons.find((l) => href.endsWith(`${l.slug}.md`));
  if (lesson) return <Link to={`/lessons/${lesson.slug}`}>{children}</Link>;
  if (href.endsWith('/README.md') && href.includes('projects'))
    return <Link to="/projects">{children}</Link>;
  if (href.endsWith('README.md')) return <Link to="/curriculum">{children}</Link>;
  if (!/^https?:/.test(href))
    return (
      <span className="source-reference">
        {children} <small>(in source ZIP)</small>
      </span>
    );
  return <a href={href}>{children}</a>;
}
export default function Markdown({ children }) {
  return (
    <div className="prose">
      <ReactMarkdown
        skipHtml
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={{
          a: MarkdownLink,
          pre: ({ children }) => (
            <CodeExample language={children?.props?.className?.replace('language-', '') || 'code'}>
              {children}
            </CodeExample>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
}
