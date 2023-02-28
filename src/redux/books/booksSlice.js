import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Hh517pOPUdJbRWvGSr6d/books/';

const initialState = {
  bookstore: [],
  status: 'idle', // | 'pending' | 'succeeded' | 'failed',
  error: null,
};
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      bookstore: [...state.bookstore, action.payload],
    }),
    removeBook: (state, action) => ({
      ...state,
      bookstore: state.bookstore.filter((book) => book.item_id !== action.payload),
    }),
  },
  extraReducers(builder) {
    builder.addCase(fetchBooks.pending, (state) => ({
      ...state,
      status: 'loading',
    }))
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const keys = Object.keys(action.payload);
        keys.forEach((key) => {
          state.bookstore.push(Object.assign({ id: key }, ...action.payload[key]));
        });
      }).addCase(fetchBooks.rejected, (state, action) => ({
        ...state,
        status: 'loading',
        error: [...state.error, action.error.message],
      }));
  },

});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
