import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { postBooks } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAutor] = useState('');
  const [category, setCategory] = useState({});
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();

  const addBookHandler = (e) => {
    if (title !== '' && author !== '') {
      e.preventDefault();
      let newcategories = '';
      if (Object.keys(category) === 0) {
        newcategories = 'Fiction';
      } else {
        newcategories = category.category;
      }

      const book = {
        item_id: `item${uuidv4()}`,
        title,
        author,
        category: newcategories,
      };
      dispatch(postBooks(book));
      setTitle('');
      setAutor('');
    }
  };
  return (
    <div className="col-12 sm:col-12 lg:col-12 xl:col-12 xl:pl-8 xl:pr-8 ">
      <div className="flex text-2xl pb-2 pt-2 flex-column sm:flex-row align-items-center xl:align-items-start flex-1 gap-4">
        <div>ADD NEW BOOK</div>
      </div>
      <div className="flex flex-column sm:flex-row align-items-center xl:align-items-start flex-none gap-4">
        <div className="flex flex-column sm:flex-row lg:w-7 flex-grow-1">
          <span className="p-input-icon-left w-12 md:w-12 sm:w-12">
            <i className="pi pi-book" />
            <InputText
              placeholder="Book title"
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-12 md:w-12 sm:w-12"
            />
          </span>
        </div>
        <div className="flex flex-column sm:flex-row w-8 gap-3 align-items-center">
          <span className="p-input-icon-left lg:w-3 lg:flex-grow-1 ">
            <i className="pi pi-user" />
            <InputText
              placeholder="Author"
              required
              type="text"
              value={author}
              onChange={(e) => setAutor(e.target.value)}
              className="w-12 flex-grow-1 "
            />
          </span>

          <Dropdown
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Select Type"
            className="lg:flex-grow-1 w-15rem"
            options={categories}
            optionLabel="category"
          />

          <div className="flex lg:flex-column sm:flex-row lg:w-1 lg:flex-grow-1 md:flex-grow-1 justify-content-center">
            <Button
              onClick={addBookHandler}
              className="bg-blue-500 text-xs lg:flex-grow-1 sm:flex-grow-0 "
              label="ADD BOOK"
              size="lg"
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default BookForm;
