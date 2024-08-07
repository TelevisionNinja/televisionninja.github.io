import './index.scss';
import { useState } from 'react';
import LogoImage from '../../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faGithub,
    faGitlab
} from '@fortawesome/free-brands-svg-icons';
import {
    faHome,
    faEnvelope,
    faSuitcase,
    faBars,
    faClose,
} from '@fortawesome/free-solid-svg-icons';
import {
    Link,
    NavLink
} from 'react-router-dom';

export default function Sidebar() {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className="nav-bar">
            <Link 
                className="logo"
                to="/"
                onClick={() => setShowNav(false)}>
                <img src={LogoImage} alt="Logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink 
                    exact="true"
                    activeclassname="active"
                    to="/"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="portfolio-link"
                    to="/portfolio"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"/>
                </NavLink>
                <NavLink
                    activeclassname="active"
                    className="contact-link"
                    to="/contact"
                    onClick={() => setShowNav(false)}
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
                </NavLink>
                <FontAwesomeIcon 
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffffff"
                    size="3x"
                    className="close-icon"
                />
            </nav>
            <ul className={showNav ? 'mobile-show' : ''}>
                <li>
                    <a
                        href="https://www.linkedin.com/in/stanley-v-386922191/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/TelevisionNinja"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon
                            icon={faGithub}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
                <li>
                    <a
                        href="https://gitlab.com/TelevisionNinja"
                        rel="noreferrer"
                        target="_blank"
                    >
                        <FontAwesomeIcon
                            icon={faGitlab}
                            color="#4d4d4e"
                            className="anchor-icon"
                        />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon 
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffffff"
                size="3x"
                className="hamburger-icon"
            />
        </div>
    );
}
