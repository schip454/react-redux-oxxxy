import { useTrackItems } from '../../hooks/useTracksItems';
import { getLocaleDateString } from '../../utils/common';
import Loader from '../Loader/Loader';
import PageTitle from '../SectionTitle/PageTitle';

import { useDispatch } from 'react-redux';
import { getCurrentTrack } from '../../redux/track/slice';

const TrackPage = () => {
  const { items, isLoading } = useTrackItems();
  const dispatch = useDispatch();

  return (
    <section className="tracks-page page">
      <div className="container">
        <PageTitle text="Все релизы" />

        {isLoading ? (
          <Loader />
        ) : (
          <div className="tracks-list">
            {items.map((track) => {
              const {
                sys: { id },
                title,
                cover,
                date,
                description,
              } = track;

              return (
                <li key={id} className="tracks-list__item">
                  <div className="tracks-list__item-image">
                    <img src={cover.url} alt={title} />
                  </div>

                  <div className="tracks-list__item-info">
                    <p className="tracks-list__item-date">
                      {getLocaleDateString(date, { month: 'short' })}
                    </p>
                    <h2 className="tracks-list__item-title">{title}</h2>
                    <p className="tracks-list__item-description">
                      {description}
                    </p>
                  </div>

                  <button
                    className="tracks-list__item-button"
                    onClick={() => dispatch(getCurrentTrack(track))}>
                    <span>слушать</span>
                  </button>
                </li>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default TrackPage;
