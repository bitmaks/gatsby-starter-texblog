import { Link } from "gatsby"
import React from "react"
import { slide as Menu } from "react-burger-menu"
import SocialLinks from "../SocialLinks/sociallinks"

import "./header.scss"

const Header = props => (
	<header className={`Header ${props.className}`}>
		<Link to="/" className="Header__logo">
			<h1 className="Header__logo__text">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</h1>
		</Link>
		<Menu right className="Header__menu">
			<Link to="/" className="Header__menu__item menuTitle">
				{!props.siteTitle || props.siteTitle === ""
					? `Undefined`
					: props.siteTitle}
			</Link>
			<SocialLinks className="Header__SocialLinks" />
			<Link to="/about" className="Header__menu__item">
				About
			</Link>
			<Link to="/all-posts" className="Header__menu__item">
				Posts
			</Link>
			<Link to="/example-page" className="Header__menu__item">
				Example Page
			</Link>
		</Menu>
	</header>
)

export default Header
