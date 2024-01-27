import { useState } from 'react';
import { useTourItems } from '../../hooks/useTourItems';
import Loader from '../Loader/Loader';
import PageTitle from '../SectionTitle/PageTitle';
import { useEffect } from 'react';
import { useCallback } from 'react';
import TourItem from './Touritem';
import { ITourItem } from '../../redux/tour/types';

const TourPage = () => {
  const [activeTab, setActiveTab] = useState<null | string>(null);
  console.log(activeTab);
  const [filteredTab, setFilteredTab] = useState<ITourItem[]>([]);
  const { items, isLoading } = useTourItems();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs = [...new Set(items.map(({ country }) => country))];

  const toggleTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      setFilteredTab(items.filter(({ country }) => country === tab));
    },
    [items]
  );

  useEffect(() => {
    if (tabs.length && !activeTab) toggleTab(tabs[0]);
  }, [tabs, toggleTab, activeTab]);

  return (
    <section className="tour-page page">
      <div className="container">
        <PageTitle text="Все концерты" />
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="tour-tabs">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  onClick={() => toggleTab(tab)}
                  className={`tour-tab ${activeTab === tab ? 'active' : ''}`}>
                  {tab}
                </li>
              ))}
            </ul>
            <ul className="tour-items">
              {filteredTab.map((item, i: number) => (
                <TourItem
                  offset={0}
                  key={item.sys.id}
                  {...item}
                  i={i}
                  initiallyVisible={true}
                />
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};

export default TourPage;
