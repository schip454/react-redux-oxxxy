import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsItems } from '../redux/news/asyncActions';
import { useAppDispatch, useAppSelector } from '../redux/store';

export const useNewsItems = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useAppSelector((state) => state.news);

  useEffect(() => {
    !items.length && dispatch(getNewsItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
