import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

interface ILogoProps {
  onClick?: () => void;
}

const Logo: FC<ILogoProps> = () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </div>
);

export default Logo;
