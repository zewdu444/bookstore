import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  bookstore: [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J. R. R.Tolkien',
    },
    {
      id: 2,
      title: 'The Lord of the Rings',
      author: 'J. R. R.Tolkien',
    },
  ],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookstore.push(action.payload);
    },
    removeBook: (state, action) => {
      state.bookstore.splice(state.bookstore.findIndex(
        (book) => book.id === action.payload,
      ), 1);
    },
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
