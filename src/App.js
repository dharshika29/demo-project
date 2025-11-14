

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
// import Contact from "./component/Contact";
import SignIn from "./component/SignIn";
import Cart from "./component/Cart";
import HomePage from "./component/Home";
import OurStory from "./component/Ourstory";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<OurStory />} />

      </Routes>
    </Router>
  );
}

export default App;
