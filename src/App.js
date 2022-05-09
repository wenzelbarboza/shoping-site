
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (

    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home />
          } exact />
          <Route path="/cart" element={<Cart />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
