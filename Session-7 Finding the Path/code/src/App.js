import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

root.render(
  <RouterProvider router={router}>
    <AppLayout />
  </RouterProvider>
);
