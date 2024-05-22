import React , {useState, useEffect} from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Welcome from "./Welcome/Welcome.js"; // Import the Welcome component

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

    return (
      <div className="App">
        <ShopContextProvider>
          <Router>
            {showWelcome ? (
              <Welcome />
            ) : (
              <>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Shop />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </>
            )}
          </Router>
        </ShopContextProvider>
      </div>
    );
  }

export default App;