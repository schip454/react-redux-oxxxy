import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import TourPage from '../Tour/TourPage';
import TrackPage from '../Tracks/TrackPage';
import NewsPage from '../News/NewsPage';
import NewsSinglePage from '../News/NewsSinglePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/tour" element={<TourPage />} />
      <Route path="/tracks" element={<TrackPage />} />
      <Route path="/news" element={<NewsPage />} />
      <Route path="/news/:id" element={<NewsSinglePage />} />
    </Routes>
  );
};

export default AppRoutes;
