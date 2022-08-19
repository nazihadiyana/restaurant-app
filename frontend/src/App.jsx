import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Routes,
  Route,
  BrowserRouter,
  Navigate,
  Outlet,
} from "react-router-dom";
import "./components/css/styles.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Login from "./components/user/login";
import Register from "./components/user/register";
import Contact from "./components/contact";
import Header from "./components/home/header";
import ListMenu from "./components/home/listmenu";
import FavoriteMenu from "./components/home/favoritesmenu";
import NotFound from "./components/notfound";
import Orders from "./components/orders/orders";
import AListMenu from "./components/admin/listmenu";
import About from "./components/about";
import { decodeToken } from "react-jwt";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Header />
      <FavoriteMenu />
      <Footer />
    </>
  );
};

const AdminRoute = () => {
  const isAuth = sessionStorage.getItem("token");
  const isReal = decodeToken(isAuth);

  if (isAuth && isReal.admin === "1") {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return <Navigate to="/" />;
  }
};

const AdminPage = () => {
  return (
    <>
      <Navbar />
      <AListMenu />
      <Footer />
    </>
  );
};

const AboutPage = () => {
  return (<>
  <Navbar />
  <About />
  <Footer />
  </>)
}

const MenuPage = () => {
  return (
    <>
      <Navbar />
      <ListMenu />
      <Footer />
    </>
  );
};

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

const RegisterPage = () => {
  return (
    <>
      <Navbar />
      <Register />
      <Footer />
    </>
  );
};

const OrdersPage = () => {
  return (
    <>
      <Navbar />
      <Orders />
      <Footer />
    </>
  );
};

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
};

const NotFoundPage = () => {
  return (
    <>
      <Navbar />
      <NotFound />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route element={<AdminRoute />}>
            <Route index path="admin" element={<AdminPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/orders" element={<OrdersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
