import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState({});
  const [author, setAutor] = useState({});
  const dispath = useDispatch();
  const addBookHandler = (event) => {
    event.preventDefault();
    const book = { id: uuidv4(), ...title, ...author };
    dispath(addBook(book));
    event.target.reset();
  };
  return (
    <div>
      <form onSubmit={addBookHandler}>
        <label htmlFor="Title">
          Title
          <input
            required
            type="text"
            onChange={(e) => setTitle({ title: e.target.value })}
          />
        </label>
        <label htmlFor="Autor">
          Author
          <input
            required
            type="text"
            onChange={(e) => setAutor({ author: e.target.value })}
          />
        </label>
        <input type="submit" value="ADD BOOK" />
      </form>
    </div>
  );
}

export default BookForm;
