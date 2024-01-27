import { Link } from 'react-router-dom';

import Section from '../Section/Section';
import SectionTitle from '../SectionTitle/SectionTitle';
import TourItem from './Touritem';
import Loader from '../Loader/Loader';
import { useTourItems } from '../../hooks/useTourItems';

const TourItems = () => {
  const { items, isLoading } = useTourItems();

  // const filtered = sortByDate(
  //   items
  //     .filter(({ soldOut, ticketLink }) => !soldOut && ticketLink)
  //     .filter((_, i) => i < 5)
  // );
  return (
    <Section className="tour">
      <div className="container">
        <SectionTitle text="Концерты" />
        {isLoading ? (
          <Loader />
        ) : (
          <ul className="tour-list">
            {items.map((item, i: number) => (
              <TourItem {...item} key={item.sys.id} i={i} />
            ))}
          </ul>
        )}
        <Link to="/tour" className="button-more">
          Все концерты
        </Link>
      </div>
    </Section>
  );
};

export default TourItems;
