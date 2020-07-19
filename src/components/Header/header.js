import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { slide as Menu } from "react-burger-menu"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header className="Header">
    <Link to="/" className="Header__logo">
      <h1 className="Header__logo__text">TeXBlog</h1>
    </Link>
    <Menu right className="Header__menu">
      <h1 className="Header__menu__item">
        <Link to="/page-2">About</Link>
      </h1>
    </Menu>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
