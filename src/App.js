
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import CartPage from './components/CartPage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (

    <div>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } exact />
          <Route path="/CartPage" element={<CartPage />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
