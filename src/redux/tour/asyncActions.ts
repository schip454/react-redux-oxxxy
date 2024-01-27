import { createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '../../utils/common';
import { tourItemCollectionQuery } from '../../utils/queries';
import { ITourItem } from './types';

export const getTourItems = createAsyncThunk(
  'tourItems/getTourItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(tourItemCollectionQuery);

      const { items } = data.fieldsCollection;
      return items as ITourItem[];
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
