import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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
import Checkout from "./component/Checkout";
import OrderSummary from "./component/OrderSummary";

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
          path="/cart"
          element={
            <PageTransition>
              <Cart />
            </PageTransition>
          }
        />

        <Route
          path="/checkout"
          element={
            <PageTransition>
              <Checkout />
            </PageTransition>
          }
        />

        <Route
          path="/order-summary"
          element={
            <PageTransition>
              <OrderSummary />
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
