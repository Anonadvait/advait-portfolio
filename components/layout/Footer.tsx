import React from 'react'

export default function Footer(): JSX.Element {
  return (
    <footer className="site-footer">
      <div>© {new Date().getFullYear()} Advait</div>
    </footer>
  )
}
