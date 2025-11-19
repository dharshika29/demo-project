import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import "./App.css"
import { AnimatePresence } from "framer-motion";
import Navbar from "./component/Navbar";
import SignIn from "./component/SignIn";
import HomePage from "./component/Home";
import OurStory from "./component/Ourstory";
import Category from "./component/Category";
import Footer from "./component/Footer";
import ProductPage from "./component/Product";
import ScrollToTop from "./component/ScrollTop";
import PageTransition from "./component/PageWrapper";
import { CartProvider } from "./component/CartContext";
import Cart from "./component/CartPage";
import Payment from "./component/Contact";
import OrderSuccess from "./component/OrderSuccess";
import Subscription from "./component/Subscription";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/signin"
          element={
            <PageTransition>
              <SignIn />
            </PageTransition>
          }
        />

        <Route
          path="/contact"
          element={
            <PageTransition>
              <Payment />
            </PageTransition>
          }
        />

        <Route
          path="/cart"
          element={
            <PageTransition>
              <Cart />
            </PageTransition>
          }
        />

        <Route
          path="/about"
          element={
            <PageTransition>
              <OurStory />
            </PageTransition>
          }
        />

        <Route
          path="/category"
          element={
            <PageTransition>
              <Category />
            </PageTransition>
          }
        />

        <Route
          path="/product/:id"
          element={
            <PageTransition>
              <ProductPage />
            </PageTransition>
          }
        />


        <Route
          path="/order-success"
          element={
            <PageTransition>
              <OrderSuccess />
            </PageTransition>
          }
        />
        
        <Route
          path="/subscription"
          element={
            <PageTransition>
              <Subscription />
            </PageTransition>
          }
        />
        
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
