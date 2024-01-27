import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { getTracksItems } from './asyncActions';
import { ITrack, ITracksItemsState } from './types';

const initialState: ITracksItemsState = {
  items: [],
  isLoading: false,
  currentTrack: null,
  currentTrackId: null,
};

const tracksItemsSlice = createSlice({
  name: 'tracksItems',
  initialState,

  reducers: {
    getCurrentTrack: (state, { payload }: PayloadAction<ITrack>) => {
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
