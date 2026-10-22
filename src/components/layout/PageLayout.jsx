import { useEffect, useState, useRef } from 'react';
import { Outlet, useLocation } from 'react-router';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
export default function PageLayout() {
  const [open, setOpen] = useState(false);
  const [mobile, setMobile] = useState(
    () => window.matchMedia?.('(max-width: 700px)').matches ?? false,
  );
  useEffect(() => {
    const media = window.matchMedia?.('(max-width: 700px)');
    if (!media) return;
    const update = () => setMobile(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    const close = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('rv-theme');
      return saved === 'dark' ||
        (!saved && window.matchMedia?.('(prefers-color-scheme: dark)').matches)
        ? 'dark'
        : 'light';
    } catch {
      return 'light';
    }
  });
  const { pathname } = useLocation();
  const main = useRef(null);
  const first = useRef(true);
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem('rv-theme', theme);
    } catch {
      /* Theme still works in memory. */
    }
  }, [theme]);
  useEffect(() => {
    window.scrollTo?.(0, 0);
    if (first.current) first.current = false;
    else main.current?.focus({ preventScroll: true });
  }, [pathname]);
  return (
    <>
      <a
        className="skip-link"
        href="#main-content"
        onClick={(event) => {
          event.preventDefault();
          main.current?.focus();
          main.current?.scrollIntoView?.();
        }}
      >
        Skip to main content
      </a>
      <Navbar open={open} setOpen={setOpen} theme={theme} setTheme={setTheme} />
      <Sidebar mobile={mobile} open={open} onNavigate={() => setOpen(false)} />
      <div className="main-shell">
        <main id="main-content" ref={main} tabIndex={-1}>
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
