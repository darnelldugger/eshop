import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Checkout from './components/Checkout';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/checkout' exact element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
