import { createSlice } from '@reduxjs/toolkit';

import { getNewsItems, getNewsSingleItem } from './asyncActions';
import { INewsItemsState } from './types';

const initialState: INewsItemsState = {
  items: [],
  item: null,
  isLoading: false,
};

const newsItemsSlice = createSlice({
  name: 'newsItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNewsItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getNewsItems.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getNewsSingleItem.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getNewsSingleItem.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.item = payload;
      })
      .addCase(getNewsSingleItem.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default newsItemsSlice.reducer;
