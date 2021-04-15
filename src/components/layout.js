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
          width={64}
        />
        <h1 className="main-heading">
          {title}
        </h1>
      </Link>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        {header}
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <label>
              <input
                type="checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
              />{' '}
              Dark mode
            </label>
          )}
        </ThemeToggler>
      </header>
      <main>{children}</main>
      <footer>
        getleon.ai - github - twitter - rss
      </footer>
    </div>
  )
}

export default Layout
