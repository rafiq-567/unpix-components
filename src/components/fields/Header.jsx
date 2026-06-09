import PropTypes from "prop-types";
export default function Header({ title = "Website Title", showNav = true }) {
  return (
    <header className="bg-white border-b px-6 py-4 flex items-center justify-between rounded-xl">
      <div className="font-bold text-xl text-indigo-600">{title}</div>
      {showNav && (
        <nav className="flex items-center gap-6">
          {["Home", "About", "Services", "Contact"].map(item => (
            <a key={item} href="#" className="text-sm text-gray-600 hover:text-indigo-600 transition">{item}</a>
          ))}
        </nav>
      )}
      <button className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700">Get Started</button>
    </header>
  );
}
Header.propTypes = { title: PropTypes.string, showNav: PropTypes.bool };