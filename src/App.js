import './App.css';
import Products from './components/products/Products';
import Home from "./components/home/Home";
import {
    BrowserRouter,
    Route, Routes
} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductsHome from "./components/products/ProductsHome";
import Machines from "./components/products/Machines";
function App() {
  return (
          <BrowserRouter>
          <Header />
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route exact path='/products' element={<ProductsHome />} />
                  <Route exact path='/products/powders' element={<Products />} />
                  <Route exact path='/products/machines' element={<Machines />} />
              </Routes>
          <Footer />
          </BrowserRouter>

      /*

      */
  );
}

export default App;
