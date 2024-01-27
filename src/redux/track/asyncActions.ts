import { createAsyncThunk } from '@reduxjs/toolkit';
import { trackItemCollectionQuery } from '../../utils/queries';
import { request } from '../../utils/common';
import { ITrack } from './types';

export const getTracksItems = createAsyncThunk(
  'tracksItems/getTracksItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(trackItemCollectionQuery);

      const { items } = data.trackCollection;

      return items as ITrack[];
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
