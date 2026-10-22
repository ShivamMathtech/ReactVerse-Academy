import { Link } from 'react-router';
export default function Footer() {
  return (
    <footer className="footer">
      <span>ReactVerse Academy · Learn. Build. Understand.</span>
      <div className="row">
        <Link to="/about">About</Link>
        <Link to="/contribute">Contribute</Link>
        <a href="https://react.dev/">React docs ↗</a>
      </div>
    </footer>
  );
}
