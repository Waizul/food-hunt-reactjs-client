import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

import AllItems from "./pages/AllItems/AllItems";

import Item from "./pages/Item/Item";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute";
import Order from "./pages/Order/Order";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Items from "./components/Items";
import Menus from "./pages/Menus";
import Breakfast from "./components/Breakfast";
import Dinner from './components/Dinner';
import Lunch from './components/Lunch';
import Cart from "./pages/Cart";
import Delivery from './pages/Delivery';


const NavContainer = styled.div`
  position: relative;
`;

function App() {
  const [active, setActive] = useState(false);

  return (
    <AuthProvider>
      <BrowserRouter>
        <NavContainer>
          <Navbar active={active} setActive={setActive} />
          <NavMenu active={active} setActive={setActive} />
        </NavContainer>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="/" element={<Home />}> */}

          {/* </Route> */}

          <Route path="/menus" element={<Menus />}>
            <Route path="breakfast/:id" element={<Breakfast />} />
            <Route path="lunch/:id" element={<Lunch />} />
            <Route path="dinner/:id" element={<Dinner />} />
          </Route>
          <Route path="/item/:id" element={<Item />} />
          <Route path="/blogs" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="cart"
            element={
              <PrivateRoute>
                <Cart />
              </PrivateRoute>
            }
          />
          <Route
            path="/order"
            element={
              <PrivateRoute>
                <Order />
              </PrivateRoute>
            }
          />
          <Route
            path="/delivery"
            element={
              <PrivateRoute>
                <Delivery />
              </PrivateRoute>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
