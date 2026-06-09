import PropTypes from "prop-types";

export default function Header({ title = "Website Title", showNav = true }) {
  return (
    <header className="bg-[var(--color-surface)] border-b border-[var(--color-border)] px-6 py-4 flex items-center justify-between rounded-xl font-sans">
      <div className="font-bold text-xl text-[var(--color-accent)]">{title}</div>
      {showNav && (
        <nav className="flex items-center gap-6">
          {["Home", "About", "Services", "Contact"].map(item => (
            <a key={item} href="#" className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition">{item}</a>
          ))}
        </nav>
      )}
      <button className="px-4 py-2 bg-[var(--color-accent)] text-[var(--color-surface)] text-sm rounded-lg hover:opacity-90 font-medium">Get Started</button>
    </header>
  );
}
Header.propTypes = { title: PropTypes.string, showNav: PropTypes.bool };