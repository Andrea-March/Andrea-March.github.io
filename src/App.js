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
import netlifyIdentity from 'netlify-identity-widget'
import {useEffect, useState} from "react";
import {loginUser, logoutUser} from "./lib/identityAction";
import Loader from "./shared/components/loader/Loader";

function App() {

    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        netlifyIdentity.on("login", (user) => {
            loginUser()
            netlifyIdentity.close()
            window.location.reload(false)
        });
        netlifyIdentity.on("logout", (user) => {
            logoutUser()
            netlifyIdentity.close()
            window.location.reload(false)
        });
        netlifyIdentity.on('close', () => {});
    },[])

  return (
          <BrowserRouter>
              <ScrollToTop />
              <Header />
              <Loader loading={loading} />
              <Routes>
                  <Route exact path='/' element={<Home setLoading={setLoading}/>} />
                  <Route path='/articles/:id' element={<ArticlePage setLoading={setLoading}/>} />
                  <Route exact path='/products' element={<ProductsHome />} />
                  <Route exact path='/products/powders' element={<Powders />} />
                  <Route exact path='/products/machines' element={<Machines />} />
                  <Route exact path='/articles' element={<Articles setLoading={setLoading}/>} />
                  <Route exact path='/guides' element={<Guides />} />
                  <Route exact path='/about' element={<About />} />
                  <Route exact path='/contacts' element={<ContactUs />} />
                  <Route exact path='thank-you' element={<ThankYou />} />
                  <Route exact path='*' element={<PageNotFound />} />
              </Routes>
              <Footer />
          </BrowserRouter>

  );
}

export default App;
