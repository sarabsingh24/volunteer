import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import categoryAPI from './categoryAPI';

const initialState = {
  categories: [],
  IsLoading: false,
  message: '',
};

//fetch catagory============================================
export const fetchCategoryAsync = createAsyncThunk(
  'catagory/fetch',
  async (_, thunkAPI) => {
    try {
      return await categoryAPI.getCategory();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      return thunkAPI.rejectWithValue(message);
    }
  },
);

const categorySlice = createSlice({
  name: 'catagory',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchCategoryAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(fetchCategoryAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategoryAsync.rejected, (state, action) => {
        state.IsLoading = false;
        state.message = action.payload;
      });
  },
});

const {actions, reducer} = categorySlice;

export const {} = actions;

export default reducer;
