import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookForm from './BookForm';
import { removeBook } from '../redux/books/booksSlice';

function Book() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const dispatch = useDispatch();
  const booklist = bookstore.length ? (
    <ul>
      {
        bookstore.map((book) => (
          <li key={book.item_id}>
            {book.title}
            <p>
              {book.author}
            </p>
            <p>
              {book.category}
            </p>
            <p />
            <button
              id={book.item_id}
              onClick={() => dispatch(removeBook(book.item_id))}
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
