import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getTourItems } from '../redux/tour/asyncActions';

export const useTourItems = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useAppSelector((state) => state.tour);

  useEffect(() => {
    !items.length && dispatch(getTourItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
