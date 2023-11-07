import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import usersAPI from './usersAPI';
const initialState = {
  user: {},
  IsAvailable: false,
  IsMessage: '',
};

//fetch catagory============================================
export const getUserAsync = createAsyncThunk(
  'user/get',
  async (id, thunkAPI) => {
    try {
      return await usersAPI.getUser(id);
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

export const updateUserAsync = createAsyncThunk(
  'user/update',
  async (obj, thunkAPI) => {
    try {
      return await usersAPI.updateUser(obj);
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

const usersSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getUserAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(getUserAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.user = action.payload;
        state.IsAvailable = state.user.available;
      })
      .addCase(getUserAsync.rejected, (state, action) => {
        state.IsLoading = false;
      })
      .addCase(updateUserAsync.pending, (state, action) => {
        state.IsLoading = true;
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.IsLoading = false;
        state.user = action.payload;
        state.IsAvailable = state.user.available;
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.IsLoading = false;
        state.IsMessage = action.payload;
      });
  },
});

const {actions, reducer} = usersSlice;

export const {} = actions;

export default reducer;
