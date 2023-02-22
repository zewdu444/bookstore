import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Book from './components/Book';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Book />} />
        <Route exact path="/catagories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
