import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getNewsSingleItem } from '../redux/news/asyncActions';

export const useNewsSingleItem = (id: string) => {
  const dispatch = useAppDispatch();
  const { item, isLoading } = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNewsSingleItem(id));
  }, [id, dispatch]);

  return { item, isLoading };
};
