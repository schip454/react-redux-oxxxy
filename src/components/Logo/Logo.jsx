import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.webp';

const Logo = () => (
  <div className="logo">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
  </div>
);

export default Logo;
