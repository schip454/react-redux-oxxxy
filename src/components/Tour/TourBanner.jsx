import video from '../../assets/images/oxxxytour.mp4';
import Section from '../Section/Section';

const TourBanner = () => {
  return (
    <Section className="tour-banner">
      <div className="container">
        <video muted loop autoPlay>
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </Section>
  );
};

export default TourBanner;
