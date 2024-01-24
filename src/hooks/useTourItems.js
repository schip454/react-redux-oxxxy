import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTourItems } from '../redux/tour/slice';

export const useTourItems = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.tour);

  useEffect(() => {
    !items.length && dispatch(getTourItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
