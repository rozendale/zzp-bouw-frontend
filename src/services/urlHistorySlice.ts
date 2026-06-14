import { createAsyncThunk, createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { type RootState } from '../store';

export interface IUrlHistory {
  value: {path:string; pagenr:number};
  status: 'idle' | 'loading' | 'failed';
}

const initialState: IUrlHistory = {
  value: {"path": "", "pagenr": 1},
  status: 'idle',
};

export const urlHistorySlice = createSlice({
  name: 'urlHistory',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setPageNumb: (state, action: PayloadAction<number>) => {
      state.value.pagenr = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setHistoryPathAPI: (state, action: PayloadAction<string>) => {
      state.value.path = action.payload;
    },
  },
});

export const { setHistoryPathAPI } = urlHistorySlice.actions;
export const { setPageNumb } = urlHistorySlice.actions;
export const selectPath = (state: RootState) => state.urlHistory.value.path;
export const selectPageNumb = (state: RootState) => state.urlHistory.value.pagenr;

export default urlHistorySlice.reducer;
