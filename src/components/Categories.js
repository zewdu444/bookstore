import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkTheStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const categories = useSelector((state) => state.category.categories);
  const categoryHandler = () => {
    dispatch(checkTheStatus());
    setShow(false);
  };
  return (
    <div>
      {show && <button hidden={!show} type="button" onClick={categoryHandler}>Check status</button>}
      {
      show ? (<p />) : (
        <ul>
          {
      categories.map((category) => (
        <li key={category.id}>
          {category.category}
        </li>
      ))
    }
        </ul>
      )

     }

    </div>
  );
}

export default Categories;
