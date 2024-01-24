import ScrollAnimation from 'react-animate-on-scroll';
import { NavLink } from 'react-router-dom';

import { MENU } from '../../utils/constants';

import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import Hamburger from './Hamburger';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <header>
          <Logo />
          <nav className="menu">
            {MENU.map(({ link, name }, i) => (
              <ScrollAnimation
                // initiallyVisible={true}
                key={link}
                className="menu-item"
                animateIn="fadeInDown"
                // delay={100 * i}
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
