import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useTrackItems } from '../../hooks/useTracksItems';
import { getCurrentTrack } from '../../redux/track/slice';
import { getLocaleDateString } from '../../utils/common';
import { useAppDispatch } from '../../redux/store';

import Section from '../Section/Section';
import SectionTitle from '../SectionTitle/SectionTitle';
import ScrollAnimation from 'react-animate-on-scroll';
import Loader from '../Loader/Loader';

const Tracks = () => {
  const { items, isLoading } = useTrackItems();
  const dispatch = useAppDispatch();
  return (
    <Section className="tracks-section">
      <div className="container">
        <SectionTitle text={'Релизы'} />
        <div className="tracks">
          {isLoading ? (
            <Loader />
          ) : (
            items.map((track) => {
              const {
                cover,
                title,
                sys: { id },
                date,
              } = track;

              return (
                <ScrollAnimation
                  key={id}
                  className="track-item"
                  animateIn="fadeInLeft"
                  animateOut="fadeOutRight">
                  <div
                    className="track"
                    onClick={() => dispatch(getCurrentTrack(track))}>
                    <div className="track-image">
                      <img className="track-img" src={cover.url} alt={title} />
                    </div>
                    <p className="track-date">
                      {getLocaleDateString(date, { month: 'short' })}
                    </p>
                    <h3 className="track-title">{title}</h3>
                  </div>
                </ScrollAnimation>
              );
            })
          )}
        </div>
        <Link to="/tracks" className="button-more">
          Все релизы
        </Link>
      </div>
    </Section>
  );
};

export default Tracks;
