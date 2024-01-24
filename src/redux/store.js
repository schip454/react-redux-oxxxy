import { configureStore } from '@reduxjs/toolkit';
import tourReducer from './tour/slice';
import trackReducer from './track/slice';
import newsReducer from './news/slice';

export const store = configureStore({
  reducer: {
    tour: tourReducer,
    track: trackReducer,
    news: newsReducer,
  },
});
