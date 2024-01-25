import Header from '../Header/Header';
import AppRoutes from './AppRoutes';
import Footer from '../Footer/Footer';

import '../../scss/main.scss';
import PlayBar from '../Playbar/Playbar';

const App = () => {
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
