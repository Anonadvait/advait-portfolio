import React from 'react'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="flex flex-wrap items-center justify-between gap-4 px-8 py-6 text-sm text-gray-400">
        <div>© {new Date().getFullYear()} Advait</div>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://github.com/Anonadvait"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/advait-awasthi-444849381/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:awasthiadvait27@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
