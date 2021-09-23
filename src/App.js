import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import Main from './components/Main';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/Data';
import Feature from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Main />
      <Products heading='Choose your favorite' Data={productData} />
      <Feature />
      <Products heading='Sweet Treats for You' Data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;