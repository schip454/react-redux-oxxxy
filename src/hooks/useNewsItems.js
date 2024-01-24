import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsItems } from '../redux/news/slice';

export const useNewsItems = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    !items.length && dispatch(getNewsItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
