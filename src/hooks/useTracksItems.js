import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTracksItems } from '../redux/track/slice';

export const useTrackItems = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state) => state.track);

  useEffect(() => {
    !items.length && dispatch(getTracksItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
