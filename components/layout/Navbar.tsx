"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useReducedMotion,
} from "motion/react";

const navItems = [
  { label: "Home", href: "/#home", id: "home", isPage: false },
  { label: "About", href: "/#about", id: "about", isPage: false },
  { label: "Projects", href: "/#projects", id: "projects", idAlt: "projects", isPage: false },
  { label: "Research", href: "/#research", id: "research", isPage: false },
  { label: "Other Than Studies", href: "/#other-than-studies", id: "other-than-studies", isPage: false },
  { label: "Achievements", href: "/achievements", id: "achievements", isPage: true },
  { label: "Contact", href: "/#contact", id: "contact", isPage: false },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const shouldReduceMotion = useReducedMotion();

  // Scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const isAchievementsPage = pathname === "/achievements";
  const isOtherPage = pathname === "/other-than-studies";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer for homepage scroll spy
  useEffect(() => {
    if (isAchievementsPage) {
      setActiveSection("achievements");
      return;
    }
    if (isOtherPage) {
      setActiveSection("other-than-studies");
      return;
    }

    const sectionIds = ["home", "about", "projects", "research", "other-than-studies", "contact"];
    const handleScrollSpy = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < 120) {
        setActiveSection("home");
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= windowHeight * 0.35) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [isAchievementsPage, isOtherPage]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Scroll Progress Indicator */}
      {!shouldReduceMotion && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-[2.5px] origin-left bg-gradient-to-r from-[#2A527A] via-[#C5DDF4] to-[#F0D0B4] z-[70]"
          aria-hidden="true"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF8F5]/85 backdrop-blur-md py-3.5 border-b border-[#EAE5DC]/60 shadow-[0_2px_12px_rgba(25,27,31,0.02)]"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <div className="mx-auto flex max-w-6xl w-full items-center justify-between px-5 sm:px-8 md:px-12">
          {/* Left: Brand Link */}
          <div className="flex-1 flex justify-start">
            <Link
              href="/"
              className="text-base font-medium tracking-tight text-[#191B1F] transition-colors hover:text-[#2A527A] shrink-0"
            >
              Advait Awasthi
            </Link>
          </div>

          {/* Center: Desktop Navigation Pill with Animated Sliding Background */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex h-11 items-center gap-0.5 lg:gap-1 rounded-full border border-[#E6E0D4]/80 bg-[#FFFFFF]/80 px-2 lg:px-2.5 py-1 shadow-[0_1px_3px_rgba(25,27,31,0.02)] backdrop-blur-md"
          >
            {navItems.map((item) => {
              let isActive = false;
              if (item.isPage) {
                isActive = isAchievementsPage;
              } else if (isOtherPage && item.id === "other-than-studies") {
                isActive = true;
              } else if (!isAchievementsPage && !isOtherPage && activeSection === item.id) {
                isActive = true;
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative px-2.5 lg:px-3 py-1.5 text-[11px] lg:text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-[#191B1F]"
                      : "text-[#5A6878] hover:text-[#191B1F] hover:bg-[#FAF8F5]/80"
                  }`}
                >
                  {/* Sliding Pill Indicator */}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 rounded-full bg-[#EDE7DB] -z-10 shadow-[0_1px_2px_rgba(25,27,31,0.04)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: Action Button */}
          <div className="flex-1 hidden md:flex justify-end items-center">
            <motion.div whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}>
              <Link
                href="/#contact"
                className="inline-flex h-10 items-center justify-center rounded-full border border-[#DDD5C7] bg-[#FFFFFF]/80 px-4 text-xs font-medium text-[#2A527A] transition hover:border-[#2A527A] hover:bg-[#FAF8F5]"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#E4DDD0] bg-[#FFFFFF]/90 text-[#191B1F] md:hidden transition hover:bg-[#F6F2E9]"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden bg-[#FAF8F5]/98 border-b border-[#E8E2D8]/80 shadow-md md:hidden backdrop-blur-lg"
            >
              <div className="flex flex-col space-y-1 px-6 py-4">
                {navItems.map((item, idx) => {
                  let isActive = false;
                  if (item.isPage) {
                    isActive = isAchievementsPage;
                  } else if (isOtherPage && item.id === "other-than-studies") {
                    isActive = true;
                  } else if (!isAchievementsPage && !isOtherPage && activeSection === item.id) {
                    isActive = true;
                  }

                  return (
                    <motion.div
                      key={item.label}
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.03, duration: 0.2 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition ${
                          isActive
                            ? "bg-[#EDE7DB] text-[#191B1F]"
                            : "text-[#5A6878] hover:bg-[#F2EDE2] hover:text-[#191B1F]"
                        }`}
                      >
                        <span>{item.label}</span>
                      </Link>
                    </motion.div>
                  );
                })}

                <div className="pt-2">
                  <a
                    href="/Advait_Awasthi_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex w-full items-center justify-center rounded-lg border border-[#D5CEBF] bg-[#FFFFFF] py-2.5 text-xs font-medium text-[#191B1F] transition hover:bg-[#F8F5EE]"
                  >
                    View Curriculum Vitae
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
