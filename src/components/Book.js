import React from 'react';

function Book({ books }) {
  const booklist = books.length ? (
    <ul>
      {
      books.map((book) => (
        <li key={book.id}>
          {book.title}
          <p>
            {book.author}
          </p>
          <button id={book.id} type="button">Remove</button>
        </li>
      ))
    }
    </ul>
  ) : (
    <p>there is no book on the shelf</p>
  );

  return (
    <div>
      {booklist}
    </div>
  );
}

export default Book;
