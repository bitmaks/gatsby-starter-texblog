import React from "react"
import PropTypes from "prop-types"
import Image from "../image"

import "./footer.scss"

const Footer = props => (
  <footer className={`Footer ${props.className}`}>
    <span className="Footer__legal">© {new Date().getFullYear()}</span>
  </footer>
)

export default Footer
