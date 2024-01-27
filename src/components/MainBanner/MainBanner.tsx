import Section from '../Section/Section';

import video from '../../assets/images/text.webm';
import { FC } from 'react';

const MainBanner: FC = () => {
  return (
    <Section>
      <div className="container">
        <h1 style={{ fontSize: 0, lineHeight: 0 }}>Oxxxymiron</h1>
        <div className="banner">
          <video
            className="banner-video"
            width={1000}
            height={'auto'}
            loop
            autoPlay
            muted>
            <source src={video} type="video/webm" />
          </video>
        </div>
      </div>
    </Section>
  );
};

export default MainBanner;
