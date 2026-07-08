export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        <a
          href="#home"
          className="text-lg font-semibold tracking-tight hover:text-blue-400 transition"
        >
          Advait Awasthi
        </a>

        <div className="hidden md:flex items-center gap-10 text-sm text-gray-400">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#research" className="hover:text-white transition">
            Research
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </nav>
    </header>
  );
}