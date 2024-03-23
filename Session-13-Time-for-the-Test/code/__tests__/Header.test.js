import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "../src/components/Header";
import { reducer } from "../src/store/appStore";
import mockStoreInfo from "../__mocks__/storeMock";
import { configureStore } from "@reduxjs/toolkit";

describe("Header component test cases", () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      preloadedState: mockStoreInfo,
      reducer,
    });
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Header />,
      children: [
        {
          path: "/",
          element: <h1> Hello, I am the body component </h1>,
        },
        {
          path: "about",
          element: <h1> Hello, I am the about component </h1>,
        },
        {
          path: "contact",
          element: <h1> Hello, I am the contact component </h1>,
        },
        {
          path: "cart",
          element: <h1> Hello, I am the cart component </h1>,
        },
      ],
    },
  ]);

  it("should render header component", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  it("should render logo in header component", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  it("should render heading in header component", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Welcome to Foodvilla");
  });

  it("should render routes list in header component", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const routesList = screen.getByRole("list");
    expect(routesList).toBeInTheDocument();
    const routes = screen.getAllByRole("link");
    expect(routes).toBeDefined();
    expect(routes).toHaveLength(4);
  });

  it("should display the route to the home page in the header", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const routesList = screen.getAllByRole("link");
    const homePageRoute = routesList[0];
    expect(homePageRoute).toBeInTheDocument();
    expect(homePageRoute).toHaveAttribute("href", "/");
    expect(homePageRoute.textContent).toBe(" Home");
  });

  it("should display the route to the about us page in the header", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const routesList = screen.getAllByRole("link");
    const aboutPageRoute = routesList[1];
    expect(aboutPageRoute).toBeInTheDocument();
    expect(aboutPageRoute).toHaveAttribute("href", "/about");
    expect(aboutPageRoute.textContent).toBe("About Us");
  });

  it("should display the route to the contact page in the header", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const routesList = screen.getAllByRole("link");
    const contactPageRoute = routesList[2];
    expect(contactPageRoute).toBeInTheDocument();
    expect(contactPageRoute).toHaveAttribute("href", "/contact");
    expect(contactPageRoute.textContent).toBe(" Contact Us");
  });

  it("should display the route to the cart page in the header", () => {
    render(
      <Provider store={store}>
        <RouterProvider router={router}>
          <Header />
        </RouterProvider>
      </Provider>
    );
    const routesList = screen.getAllByRole("link");
    const contactPageRoute = routesList[3];
    expect(contactPageRoute).toBeInTheDocument();
    expect(contactPageRoute).toHaveAttribute("href", "/cart");
    const cartPageMessage = ` Cart (${mockStoreInfo.cart.items.length})`;
    expect(contactPageRoute.textContent).toBe(cartPageMessage);
  });
});
