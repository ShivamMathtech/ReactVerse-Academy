import { Link, useNavigate } from 'react-router';
import { Menu, Moon, Sun, Search, ArrowUpRight } from 'lucide-react';
export default function Navbar({ open, setOpen, theme, setTheme }) {
  const navigate = useNavigate();
  return (
    <header className="navbar">
      <div className="brand-group">
        <button
          className="icon-button mobile-menu"
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="academy-sidebar"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu size={20} />
        </button>
        <Link to="/" className="brand">
          <span className="brand-mark">↗</span>
          <span>
            reactverse<span className="brand-sub">ACADEMY</span>
          </span>
        </Link>
      </div>
      <form
        className="header-search"
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`/lessons?q=${encodeURIComponent(new FormData(e.currentTarget).get('q'))}`);
        }}
      >
        <Search size={17} />
        <input name="q" aria-label="Search the course" placeholder="Find your next breakthrough…" />
        <button type="submit" aria-label="Submit course search">
          ↵
        </button>
      </form>
      <div className="row">
        <button
          className="icon-button"
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          onClick={() => setTheme((t) => (t === 'light' ? 'dark' : 'light'))}
        >
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>
        <Link className="contribute-link" to="/contribute">
          Contribute <ArrowUpRight size={15} />
        </Link>
        <span className="avatar" aria-label="Local learner">
          RV
        </span>
      </div>
    </header>
  );
}
