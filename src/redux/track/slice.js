import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { request } from '../../utils/common';
import { trackItemCollectionQuery } from '../../utils/queries';

const initialState = {
  items: [],
  isLoading: false,
  currentTrack: null,
  currentTrackId: null,
};

export const getTracksItems = createAsyncThunk(
  'tracksItems/getTracksItems',
  async (_, thunkAPI) => {
    try {
      const data = await request(trackItemCollectionQuery);

      const { items } = data.trackCollection;

      return items;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

const tracksItemsSlice = createSlice({
  name: 'tracksItems',
  initialState,

  reducers: {
    getCurrentTrack: (state, { payload }) => {
      state.currentTrack = payload;
      state.currentTrackId = payload.sys.id;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getTracksItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTracksItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getTracksItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { getCurrentTrack } = tracksItemsSlice.actions;

export default tracksItemsSlice.reducer;
