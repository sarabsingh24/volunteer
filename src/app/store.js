import {configureStore} from '@reduxjs/toolkit';

import usersReducer from 'features/home/usersSlice';
import categoryReducer from 'features/category/categorySlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    category: categoryReducer,
  },
});
