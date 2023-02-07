import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';


// import Footer from './layouts/publicLayout/Footer';
// import Header from '../src/layouts/publicLayout/Header';
// import About from './views/public/About/About';
// import Detail from './layouts/public/DetailProduct';
// import Form from './layouts/public/Form';
// import Product from './views/public/Product/Product';
// import Register from './views/public/Register/Register';
// import Login from './views/public/Login/Login';

import PublicMain from './views/public/publicMain';



function App() {
  return (
    <div>
       <BrowserRouter>
      <PublicMain/>
   
    
  </BrowserRouter>
    </div>
  );
}

export default App;
