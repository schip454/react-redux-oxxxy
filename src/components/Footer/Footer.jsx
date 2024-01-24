import Logo from '../Logo/Logo';
import Socials from '../Socials/Socials';
import FooterForm from './FooterForm';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-wrapper">
          <FooterForm />
          <div className="footer-info">
            <Logo />
            <p>OXXXYMIRON, {year}</p>
          </div>

          <Socials width={24} height={24} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
