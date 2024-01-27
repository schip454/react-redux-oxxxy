import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ITourItemsSliceState } from './types';
import { getTourItems } from './asyncActions';

const initialState: ITourItemsSliceState = {
  items: [],
  isLoading: false,
};

const tourItemsSlice = createSlice({
  name: 'tourItems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTourItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTourItems.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getTourItems.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default tourItemsSlice.reducer;
