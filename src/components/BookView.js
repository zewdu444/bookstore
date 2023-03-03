import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Knob } from 'primereact/knob';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';
import { fetchBooks, deleteBooks } from '../redux/books/booksSlice';
import './BookView.css';

export default function BookView() {
  const bookstore = useSelector((state) => state.books.bookstore);
  const status = useSelector((state) => state.books.status);
  const [value, setValue] = useState(Math.floor(Math.random() * 100));
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
    <Card className="col-12 sm:col-12 lg:col-12 xl:col-12 border-round mb-3">
      <div className="flex flex-column surface-0 sm:flex-row align-items-center xl:align-items-start flex-1 gap-4">
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
            <Divider className="lg:pr-8 hidden lg:block" layout="vertical" />
          </div>
        </div>
        <div className="flex sm:flex-column sm:align-items-end sm:gap-2 pt-2">
          <span className="text-1xl p-1 text-400 align-self-start">
            CURRENT CHAPTER
          </span>
          <span className="text-1xl p-1  align-self-start ">
            CHAPTER 17:A Lesson Learned
          </span>
          <Button className="bg-blue-500 text-xs  align-self-start " size="sm" label="UPDATE PROGRESS" />
        </div>
      </div>
    </Card>

  );
  return (
    <div className="ml-1 mr-1 lg:ml-0 lg:mr-0">
      <DataView
        value={bookstore}
        itemTemplate={bookDisplay}
        className="xl:pl-8 xl:pr-8 xl:pt-2"
      />
    </div>
  );
}
