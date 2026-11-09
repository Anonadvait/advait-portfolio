import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#EAE5DC] bg-[#F7F5F0] text-[#525D6B] transition-colors">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <Link
              href="/"
              className="text-lg font-medium tracking-tight text-[#1A1D20] hover:text-[#2A527A] transition"
            >
              Advait Awasthi
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-[#626E7E]">
              Computer Science student focused on cybersecurity, applied research, and building useful technology.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 text-sm">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#828E9E]">
                Navigation
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <Link href="/#about" className="hover:text-[#1A1D20] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/#projects" className="hover:text-[#1A1D20] transition">
                    Selected Projects
                  </Link>
                </li>
                <li>
                  <Link href="/#research" className="hover:text-[#1A1D20] transition">
                    Research & Experience
                  </Link>
                </li>
                <li>
                  <Link href="/#other-than-studies" className="hover:text-[#1A1D20] transition">
                    Other Than Studies
                  </Link>
                </li>
                <li>
                  <Link href="/achievements" className="hover:text-[#2A527A] font-medium transition">
                    Achievements
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[#1A1D20] transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#828E9E]">
                Connect
              </p>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a
                    href="mailto:awasthiadvait27@gmail.com"
                    className="hover:text-[#1A1D20] transition"
                  >
                    Email
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Anonadvait"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1A1D20] transition"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/advait-awasthi-444849381/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1A1D20] transition"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="/Advait_Awasthi_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1A1D20] transition"
                  >
                    Curriculum Vitae
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#EAE4D8] pt-8 text-xs text-[#828E9E] sm:flex-row">
          <p>© {currentYear} Advait Awasthi. Designed with precision and restraint.</p>
          <p>SRM Institute of Science and Technology</p>
        </div>
      </div>
    </footer>
  );
}
