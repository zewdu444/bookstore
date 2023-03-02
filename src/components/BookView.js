import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { fetchBooks, deleteBooks } from '../redux/books/booksSlice';

export default function BookView() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const status = useSelector((state) => state.books.status);
  const [value, setValue] = useState(Math.floor(Math.random() * 100));
  // const categories = useSelector((state) => state.category.categories);
  // const [selected, setSelected] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
    if (status === 'succeeded') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const bookDisplay = (bookstore) => (
    <card className="col-12 sm:col-12 lg:col-12 xl:col-12 p-2 surface-200">
      <div className="p-4 border-2 surface-border surface-card border-round">
        <div className="flex flex-column sm:flex-row align-items-center xl:align-items-start flex-1 gap-4">
          <div className="flex flex-column w-5  align-items-center sm:align-items-start">
            <div className="text-1xl text-600">{bookstore.category}</div>
            <div className="text-2xl font-bold text-900 pb-2">{bookstore.title}</div>
            <div className="text-1xl font-bold text-900 text-blue-400">{bookstore.author}</div>
            <div className="flex align-items-center">
              <span className="flex gap-0">
                <Button label="Comments" className="text-blue-400 p-0 " text />
                <Divider layout="vertical" />
                <Button onClick={() => dispatch(deleteBooks(bookstore.id))} label="Remove" className="text-blue-400 p-0" text />
                <Divider layout="vertical" className="h-1" />
                <Button label="Edit" className="text-blue-400 p-0" text />
              </span>
            </div>
          </div>
          <div className="flex sm:flex-column sm:gap-2 w-4 pt-3">
            <div className="flex flex-1 md:flex-none flex gap-4">
              <Knob
                showValue={false}
                value={value}
                onChange={() => setValue(value)}
                strokeWidth={5}
                valueColor="#3B82F6"
                className="text-blue-400"
              />
              <div className="flex flex-column flex justify-content-center">
                <span className="text-4xl">
                  {value}
                  %
                </span>
                <span>
                  completed
                </span>

              </div>
              <Divider className="lg:pr-8 hidden lg:block" s layout="vertical" />
            </div>
          </div>
          <div className="flex sm:flex-column   sm:align-items-end sm:gap-2 pt-2">
            <span className="text-1xl p-1 text-400 align-self-start">
              CURRENT CHAPTER
            </span>
            <span className="text-1xl p-1  align-self-start ">
              CHAPTER 17:A Lesson Learned
            </span>
            <Button className="bg-blue-500 text-xs  align-self-start " size="sm" label="UPDATE PROGRESS" />
          </div>
        </div>
      </div>
    </card>

  );
  return (
    <div>
      <DataView
        value={bookstore}
        itemTemplate={bookDisplay}
        className="xl:pl-8 xl:pr-8 surface-200 "
      />
    </div>
  );
}
