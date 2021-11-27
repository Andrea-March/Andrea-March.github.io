import './App.css';
import Products from './components/products/Products';
import Home from "./components/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductsHome from "./components/products/ProductsHome";
import Machines from "./components/products/Machines";
import Articles from "./components/articles/Articles";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
          <BrowserRouter>
              <ScrollToTop />
          <Header />
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/products' element={<ProductsHome />} />
                  <Route exact path='/products/powders' element={<Products />} />
                  <Route exact path='/products/machines' element={<Machines />} />
                  <Route exact path='/articles' element={<Articles />} />
              </Routes>
          <Footer />
          </BrowserRouter>

      /*

      */
  );
}

export default App;
