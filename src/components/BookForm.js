import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState({});
  const [author, setAutor] = useState({});
  const [category, setCategory] = useState({});
  const bookstore = useSelector((state) => state.books.bookstore);
  const categories = useSelector((state) => state.category.categories);
  const dispath = useDispatch();
  const addBookHandler = (event) => {
    event.preventDefault();
    const book = {
      item_id: `item${bookstore.length + 1}`,
      ...title,
      ...author,
      ...category,
    };
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
        {' '}
        <label htmlFor="catagories">
          <select
            name="catagories"
            required
            onChange={(e) => setCategory({ category: e.target.value })}
          >
            {
              categories.map((category) => (
                <option
                  key={category.id}
                  value={category.category}
                >
                  {category.category}

                </option>
              ))
        }
          </select>
        </label>
        {' '}
        <input type="submit" value="ADD BOOK" />
      </form>
      <hr />
      <br />

    </div>
  );
}

export default BookForm;
