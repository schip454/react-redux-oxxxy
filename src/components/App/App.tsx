import { FC } from 'react';
import Header from '../Header/Header';
import AppRoutes from './AppRoutes';
import Footer from '../Footer/Footer';
import PlayBar from '../PlayBar/PlayBar';

import '../../scss/main.scss';

const App: FC = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <PlayBar />
      <Footer />
    </div>
  );
};

export default App;
