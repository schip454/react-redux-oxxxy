import { useParams } from 'react-router-dom';
import { useNewsSingleItem } from '../../hooks/useNewsSingleItem';
import Loader from '../Loader/Loader';
import { getLocaleDateString } from '../../utils/common';

const NewsSinglePage = () => {
  const { id } = useParams();
  const { item, isLoading } = useNewsSingleItem(id);

  console.log(item);

  return (
    <section className="news-single page">
      <div className="container">
        {isLoading || !item ? (
          <Loader />
        ) : (
          <div className="news-single__item">
            <h1 className="news-single__item-title">{item.title}</h1>
            <img
              className="news-single__item-img"
              src={item.cover.url}
              alt={item.title}
            />
            <p className="news-single__item-date">
              {getLocaleDateString(item.date, { month: 'short' })}
            </p>
            <div className="news-single__item-content">{item.description}</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsSinglePage;
