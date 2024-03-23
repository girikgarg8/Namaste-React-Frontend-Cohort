import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { reducer } from "../src/store/appStore";
import Cart from "../src/components/Cart";
import mockStoreInfo from "../__mocks__/storeMock";

describe("Cart component test cases", () => {
  let store;
  let emptyStore;

  beforeEach(() => {
    store = configureStore({
      preloadedState: mockStoreInfo,
      reducer,
    });

    emptyStore = configureStore({
      preloadedState: {
        cart: {
          items: [],
        },
      },
      reducer,
    });
  });

  test("should render cart component for non empty cart", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(screen.getByTestId("cart")).toBeDefined();
  });

  test("should render cart component for empty cart", () => {
    render(
      <Provider store={emptyStore}>
        <Cart />
      </Provider>
    );
    expect(screen.getByTestId("cart")).toBeDefined();
  });

  test("should render heading for non empty cart in cart component", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const cartHeading = screen.getByRole("heading");
    expect(cartHeading).toBeInTheDocument();
    expect(cartHeading.textContent).toBe(" Cart ");
  });

  test("should render heading for empty cart in cart component", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const headings = screen.getAllByRole("heading");
    const cartHeading = headings[0];
    expect(cartHeading).toBeInTheDocument();
    expect(cartHeading.textContent).toBe(" Cart ");
  });

  test("should render clear cart button for non empty cart in cart component", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const clearCartButton = screen.getByRole("button", {
      name: "Clear Cart",
    });
    expect(clearCartButton).toBeInTheDocument();
  });

  test("should not render clear cart button for empty cart in cart component", () => {
    render(
      <Provider store={emptyStore}>
        <Cart />
      </Provider>
    );
    const clearCartButton = screen.queryByRole("button", {
      name: "Clear Cart",
    });
    expect(clearCartButton).toBeNull();
  });

  test("should render cart items list for non empty cart in cart component", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(screen.getByTestId("cart-items-list")).toBeInTheDocument();
  });

  test("should not render cart items list for empty cart in cart component", () => {
    render(
      <Provider store={emptyStore}>
        <Cart />
      </Provider>
    );
    expect(screen.queryByTestId("cart-items-list")).toBeNull();
  });

  test("should not render empty cart message for not empty cart in cart component", () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    expect(screen.queryByText("Your cart is empty !")).toBeNull();
  });

  test("should render empty cart message for empty cart in cart component", () => {
    render(
      <Provider store={emptyStore}>
        <Cart />
      </Provider>
    );
    expect(screen.getByText("Your cart is empty !")).toBeInTheDocument();
  });

  test("should clear cart when click on clear cart in cart component", async () => {
    render(
      <Provider store={store}>
        <Cart />
      </Provider>
    );
    const clearCartButton = screen.getByRole("button", {
      name: "Clear Cart",
    });
    expect(clearCartButton).toBeInTheDocument();
    fireEvent.click(clearCartButton);
    expect(screen.getByText("Your cart is empty !")).toBeInTheDocument();
  });
});
