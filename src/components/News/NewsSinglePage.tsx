import { useNavigate, useParams } from 'react-router-dom';
import { useNewsSingleItem } from '../../hooks/useNewsSingleItem';
import Loader from '../Loader/Loader';
import { getLocaleDateString } from '../../utils/common';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const NewsSinglePage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  if (!id) {
    alert('Такая страница не найдена!');
    return navigate('/');
  }
  const { item, isLoading } = useNewsSingleItem(id);

  return (
    <section className="news-single page">
      <div className="container">
        {isLoading || !item ? (
          <Loader />
        ) : (
          <>
            <Link className="link-back" to={'/news'}>
              <ArrowBackIcon />
              Back
            </Link>
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
              <div className="news-single__item-content">
                {item.description}
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSinglePage;
