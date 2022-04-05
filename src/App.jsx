import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./context/AuthProvider";

import AllItems from "./pages/AllItems/AllItems";
import Breakfast from "./pages/AllItems/Breakfast/Breakfast";
import Dinner from "./pages/AllItems/Dinner/Dinner";
import Lunch from "./pages/AllItems/Lunch/Lunch";
import Cart from "./pages/Cart/Cart";
import Item from "./pages/Item/Item";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute";
import Order from "./pages/Order/Order";
import { useState } from "react";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Items from "./components/Items";

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
          <Route path='/' element={<Home/>} />
          
          {/* <Route path="/" element={<Home />}> */}
            <Route path="breakfast" element={<Breakfast />} />
            <Route path="/lunch" element={<Lunch />} />
            <Route path="dinner" element={<Dinner />} />
          {/* </Route> */}

          <Route path="/items" element={<AllItems />} />
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
