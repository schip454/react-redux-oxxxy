import { FC } from 'react';
import MainBanner from '../MainBanner/MainBanner';
import News from '../News/News';
import ShopBanner from '../ShopBanner/ShopBanner';
import TourBanner from '../Tour/TourBanner';
import TourItems from '../Tour/TourItems';
import Tracks from '../Tracks/Tracks';

const Home: FC = () => {
  return (
    <main className="main">
      <MainBanner />
      <TourItems />
      <TourBanner />
      <Tracks />
      <ShopBanner />
      <News />
    </main>
  );
};

export default Home;
