import React from "react";
import Admin from "../components/Admin/Admin";
import Menu from "../components/Menu/Menu";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home/Home";
import EditProduct from "../components/EditProduct/EditProduct";
import Register from "../components/Register/Register";
import { Search } from "@mui/icons-material";

const MainRoutes = () => {
  let MY_ROUTES = [
    { Link: "/admin", element: <Admin />, id: 1 },
    { Link: "/menu", element: <Menu />, id: 2 },
    { Link: "/edit/:editID", element: <EditProduct />, id: 3 },
    { Link: "/home", element: <Home />, id: 4 },
    { Link: "/register", element: <Register />, id: 5 },
    { Link: "/search", element: <Search />, id: 6 },
  ];
  return (
    <Routes>
      {MY_ROUTES.map((el) => (
        <Route path={el.Link} element={el.element} key={el.id} />
      ))}
    </Routes>
  );
};

export default MainRoutes;
