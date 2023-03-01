import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBooks } from '../redux/books/booksSlice';

function BookForm() {
  const [title, setTitle] = useState('');
  const [author, setAutor] = useState('');
  const [category, setCategory] = useState('Fiction');
  const categories = useSelector((state) => state.category.categories);
  const dispatch = useDispatch();
  const addBookHandler = (e) => {
    if (title !== '' && author !== '') {
      e.preventDefault();
      const book = {
        item_id: `item${uuidv4()}`,
        title,
        author,
        category,
      };
      dispatch(postBooks(book));
      setTitle('');
      setAutor('');
    }
  };

  return (
    <div>
      <form>
        <label htmlFor="Title">
          Title
          <input
            required
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label htmlFor="Autor">
          Author
          <input
            required
            type="text"
            value={author}
            onChange={(e) => setAutor(e.target.value)}
          />
        </label>
        {' '}
        <label htmlFor="catagories">
          <select
            name="catagories"
            required
            defaultValue="Fiction"
            onInput={(e) => setCategory(e.target.value)}
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
        <button type="button" onClick={addBookHandler}>ADD BOOK</button>
      </form>
      <hr />
      <br />

    </div>
  );
}

export default BookForm;
