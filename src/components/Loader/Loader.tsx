import { FC } from 'react';
import loader from '../../assets/images/loader.webp';

const Loader: FC = () => {
  return (
    <div className="loader">
      <img src={loader} alt="Loading..." />
    </div>
  );
};

export default Loader;
