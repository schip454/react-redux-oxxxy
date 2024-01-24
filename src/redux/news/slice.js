import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { request } from '../../utils/common';
import { newsItemCollectionQuery, newsItemQuery } from '../../utils/queries';

const initialState = {
  items: [],
  item: null,
  isLoading: false,
};

export const getNewsItems = createAsyncThunk(
  'newsItems/getNewsItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(newsItemCollectionQuery);

      const { items } = data.newsItemCollection;

      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const getNewsSingleItem = createAsyncThunk(
  'newsItems/getNewsSingleItem',
  async (id, thunkAPI) => {
    try {
      const data = await request(newsItemQuery(id));

      const item = data.newsItem;

      return item;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const newsItemsSlice = createSlice({
  name: 'newsItems',
  initialState,

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
