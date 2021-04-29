import * as React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import logo from '../images/logo.svg'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <Link className="logo-headline" to="/">
        <img
          src={logo}
          alt="Logo"
          width={54}
        />
        <h1 className="main-heading">
          {title}
        </h1>
      </Link>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        « {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <button
              type="button"
              className="theme-toggler"
              onClick={() => toggleTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {theme === 'dark' ? (
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor"
                     stroke-width="2" fill="none"
                     stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) :
                <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none"
                     stroke-linecap="round" stroke-linejoin="round" className="css-i6dzq1">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              }
            </button>
          )}
        </ThemeToggler>
      </header>
      <main>{children}</main>
      <footer className="global-footer">
        <ul>
          <li><a href="https://twitter.com/louistiti_fr" rel="noreferrer" target="_blank">twitter</a></li>
          <li><a href="https://github.com/leon-ai/leon" rel="noreferrer" target="_blank">github</a></li>
          <li><a href="https://getleon.ai" rel="noreferrer" target="_blank">getleon.ai</a></li>
        </ul>
        <ul>
          <li><a href="/rss.xml">rss</a></li>
        </ul>
      </footer>
    </div>
  )
}

export default Layout
