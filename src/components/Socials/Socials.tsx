import { FC } from 'react';
import { SOCIALS } from '../../utils/constants';
import Icon from '../Icon/Icon';

const Socials: FC = () => {
  return (
    <ul className="socials">
      {SOCIALS.map(({ icon, link }) => (
        <li key={link} className="socials-item">
          <a href={link} target="_blank" rel="noreferrer">
            <Icon name={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
