import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils/common';
import { newsItemCollectionQuery, newsItemQuery } from '../../utils/queries';

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
  async (id: string, thunkAPI) => {
    try {
      const data = await request(newsItemQuery(id));

      const item = data.newsItem;

      return item;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
