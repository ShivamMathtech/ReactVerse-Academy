export default function ProgressIndicator({ value, total, label = 'Course progress' }) {
  const percent = total ? Math.round((value / total) * 100) : 0;
  return (
    <div className="progress-indicator">
      <div className="row between">
        <span>{label}</span>
        <strong>{percent}%</strong>
      </div>
      <progress aria-label={label} value={value} max={total || 1} />
      <small>
        {value} of {total} lessons complete
      </small>
    </div>
  );
}
