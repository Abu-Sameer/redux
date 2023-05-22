import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import statusCode from '../utilitie/Status';

const initialState = {
  data: [],
  status: statusCode.IDLE,
};

const ProductApis = createSlice({
  name: 'productApi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = statusCode.LOADING;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = statusCode.IDLE;
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = statusCode.ERROR;
      });
  },
});

export default ProductApis.reducer;

export const fetchUser = createAsyncThunk('Users', async () => {
  const data = await fetch('https://fakestoreapi.com/products');
  const result = data.json();
  return result;
});
