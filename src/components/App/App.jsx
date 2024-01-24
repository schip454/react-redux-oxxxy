import Header from '../Header/Header';
import AppRoutes from './AppRoutes';
import Footer from '../Footer/Footer';

import '../../scss/main.scss';

const App = () => {
  return (
    <div className="app">
      <Header />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
