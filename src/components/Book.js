import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import { removeBook } from '../redux/books/booksSlice';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();
  console.log(bookstore);
  const booklist = bookstore.length ? (
    <ul>
      {
        bookstore.map((book) => (
          <li key={book.id}>
            {book.title}
            <p>
              {book.author}
            </p>
            <button
              id={book.id}
              onClick={() => dispatch(removeBook(book.id))}
              type="button"
            >
              Remove

            </button>
          </li>
        ))
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
