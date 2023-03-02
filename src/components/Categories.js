import React, { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { Fieldset } from 'primereact/fieldset';
import { checkTheStatus } from '../redux/categories/categoriesSlice';

function Categories() {
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const categories = useSelector((state) => state.category.categories);
  const toast = useRef(null);
  const categoryHandler = () => {
    setShow(false);
    dispatch(checkTheStatus());
    toast.current.show({ severity: 'warn', summary: 'Info', detail: 'Under Construction' });
  };

  return (
    <div className="card flex justify-content-center">
      <Toast ref={toast} />
      {show && (
      <Button
        rounded
        hidden={!show}
        type="button"
        onClick={categoryHandler}
        label="Check status"
        severity="info"
        className="mt-8"
      />

      )}
      {
      show ? (<p />) : (
        <div className="mt-4">
          <Fieldset legend="Under Construction" toggleable>
            {
          categories.map((category) => (
            <p key={category.id} className="m-0">
              {category.category}
            </p>

          ))
        }
          </Fieldset>

        </div>
      )

     }

    </div>
  );
}

export default Categories;
