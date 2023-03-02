import React from 'react';
import BookForm from './BookForm';
import BookView from './BookView';

function Book() {
  return (
    <div className="grid surface-200 pt-3">
      <div className="card col-12">
        <BookView />
      </div>
      <div className="card col-12">
        <BookForm />
      </div>
    </div>
  );
}

export default Book;
