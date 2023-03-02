import React from 'react';
import { Divider } from 'primereact/divider';
import BookForm from './BookForm';
import BookView from './BookView';

function Book() {
  return (
    <div className="grid surface-200 pt-3">
      <div className="card col-12">
        <BookView />
      </div>
      <Divider className="lg:ml-8 lg:mr-8 sm:ml-2 sm:mr-4 mb-0" layout="horizontal" />
      <div className="card col-12">
        <BookForm />
      </div>
    </div>
  );
}

export default Book;
