import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { MENU } from '../../utils/constants';

import ScrollAnimation from 'react-animate-on-scroll';
import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import Hamburger from './Hamburger';

const Header: FC = () => {
  return (
    <div className="header">
      <div className="container">
        <header>
          <Logo />
          <nav className="menu">
            {MENU.map(({ link, name }, i) => (
              <ScrollAnimation
                key={link}
                className="menu-item"
                animateIn="fadeInDown"
                offset={0}>
                <NavLink
                  className={({ isActive }) => (isActive ? 'active' : '')}
                  to={`/${link}`}>
                  {name}
                </NavLink>
              </ScrollAnimation>
            ))}
          </nav>
          <Socials />
          <Hamburger />
        </header>
      </div>
    </div>
  );
};

export default Header;
