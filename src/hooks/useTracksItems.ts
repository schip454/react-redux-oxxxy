import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/store';
import { getTracksItems } from '../redux/track/asyncActions';

export const useTrackItems = () => {
  const dispatch = useAppDispatch();
  const { items, isLoading } = useAppSelector((state) => state.track);

  useEffect(() => {
    !items.length && dispatch(getTracksItems());
  }, [items, dispatch]);

  return { items, isLoading };
};
