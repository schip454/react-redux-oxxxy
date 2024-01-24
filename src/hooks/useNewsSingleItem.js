import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsSingleItem } from '../redux/news/slice';

export const useNewsSingleItem = (id) => {
  const dispatch = useDispatch();
  const { item, isLoading } = useSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsSingleItem(id));
  }, [id, dispatch]);

  return { item, isLoading };
};
