import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const status = useSelector((state) => state.books.status);
  const categories = useSelector((state) => state.category.categories);
  const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(status);
    if (status === 'idle') {
      dispatch(fetchBooks());
    } else if (status === 'Created') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const selectHandler = (e) => {
    setSelected(e.target.value);
  };
  const booklist = bookstore.length ? (

    <ul>
      <label htmlFor="catagories">
        Filterd by :catagories
        {'  '}
        <select
          name="catagories"
          defaultValue="All"
          onInput={selectHandler}
        >
          <option defaultValue="All" value="All">All</option>
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
      {
        bookstore.map((book) => {
          if (book.category === selected) {
            return (
              <li key={book.id}>
                {book.title}
                <p>
                  {book.author}
                </p>
                <p>
                  {book.category}
                </p>
                <p />
                <button
                  id={book.id}
                  onClick={() => dispatch(removeBook(book.id))}
                  type="button"
                >
                  Remove

                </button>
              </li>
            );
          }

          if (selected === 'All') {
            return (
              <li key={book.id}>
                {book.title}
                <p>
                  {book.author}
                </p>
                <p>
                  {book.category}
                </p>
                <p />
                <button
                  id={book.id}
                  onClick={() => dispatch(removeBook(book.id))}
                  type="button"
                >
                  Remove

                </button>
              </li>
            );
          }
          if (selected === undefined) {
            return (
              <li key={book.id}>
                {book.title}
                <p>
                  {book.author}
                </p>
                <p>
                  {book.category}
                </p>
                <p />
                <button
                  id={book.id}
                  onClick={() => dispatch(removeBook(book.id))}
                  type="button"
                >
                  Remove

                </button>
              </li>
            );
          }

          return false;
        })
    }
    </ul>
  ) : (
    <p>there is no book on the shelf</p>
  );

  return (
    <div>
      <BookForm />
      {booklist}
    </div>
  );
}

export default Book;
