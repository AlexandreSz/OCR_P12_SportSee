import React from "react";
import Logo from "../../assets/SportSee-Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="navbar">
            <img src={Logo} alt="Logo SportSee" className="navbar__logo" />

            <Link className="navbar__link" to="/">Accueil</Link>
            <Link className="navbar__link" to="/profil">Profil</Link>
            <Link className="navbar__link" to="/reglages">Réglage</Link>
            <Link className="navbar__link" to="/communaute">Communauté</Link>
        </div>
    );
};

export default Header;