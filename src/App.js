import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  const bookstore = [
    {
      id: 1,
      title: 'The Lord of the Rings',
      author: 'J. R. R.Tolkien',
    },
  ];
  const [books, setBooks] = useState(bookstore);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Book books={books} setBooks={setBooks} />} />
        <Route exact path="/catagories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
