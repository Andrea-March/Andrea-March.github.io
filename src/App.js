import './App.css';
import Powders from './components/products/Powders';
import Home from "./components/home/Home";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import ProductsHome from "./components/products/ProductsHome";
import Machines from "./components/products/Machines";
import Articles from "./components/articles/Articles";
import ScrollToTop from "./ScrollToTop";
import ArticlePage from "./components/articles/article-page/ArticlePage";
import ContactUs from "./components/contactUs/ContactUs";
import About from "./components/about/About";
import Guides from "./components/guides/Guides";
import ThankYou from "./components/contactUs/ThankYou";
import PageNotFound from "./shared/components/page-not-found/PageNotFound";

function App() {
  return (
          <BrowserRouter>
              <ScrollToTop />
          <Header />
              <Routes>
                  <Route exact path='/' element={<Home />} />
                  <Route path='/articles/:id' element={<ArticlePage />} />
                  <Route exact path='/products' element={<ProductsHome />} />
                  <Route exact path='/products/powders' element={<Powders />} />
                  <Route exact path='/products/machines' element={<Machines />} />
                  <Route exact path='/articles' element={<Articles />} />
                  <Route exact path='/guides' element={<Guides />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/contacts' element={<ContactUs />} />
                  <Route exact path='thank-you' element={<ThankYou />} />
                  <Route exact path='*' element={<PageNotFound />} />
              </Routes>
          <Footer />
          </BrowserRouter>

      /*

      */
  );
}

export default App;
