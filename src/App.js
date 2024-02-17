import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Products from './components/Products';
import Product from './components/Product';


function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Routes>
      <Route exact path="/" component={Home} /> 
        <Route exact path="/products" component={Products} />
        <Route exact path="/products/:id" component={Product} />
      </Routes>
    </>
  );
}

export default App;
