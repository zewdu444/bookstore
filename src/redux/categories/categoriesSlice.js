import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [
    { id: '1', category: 'Fiction' },
    { id: '2', category: 'Nonfiction' },
  ],
};
export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    checkTheStatus: (state) => {
      if (state.categories.length === 0) {
        state.categories.push('Under construction');
      }
    },

  },

});
export const { checkTheStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
