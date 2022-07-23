
import { BrowserRouter, Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';

import CartPage from './components/CartPage';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (

    <div className='homeBackground'>

      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={
            <Home />
          } exact />
          <Route path="/CartPage" element={<CartPage />} exact />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
