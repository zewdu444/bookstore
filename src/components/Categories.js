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
      <h2>{categories[0]}</h2>
      {show && <button hidden={!show} type="button" onClick={categoryHandler}>Check status</button>}
    </div>
  );
}

export default Categories;
