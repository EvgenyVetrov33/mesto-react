import React from "react";
import logo from '../images/logo.svg';

function Header() {
	return (
		<header className="header page__header">
			<a href="#" className="header__logo">
				<img src={logo} className="header__image" alt="Логотип" />
			</a>
		</header>
	);
}

export default Header;