import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import UserContext from "../src/utils/UserContext";
import Body from "../src/components/Body";
import restaurantsDataMock from "../__mocks__/restaurantsDataMockResponse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as getRestaurantDetailsUtil from "../src/utils/useRestaurantDetails";

describe("Body component test cases", () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
    },
  ]);

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render login prompt if user not logged in and userinfo not available in context", () => {
    render(
      <RouterProvider router={router}>
        <UserContext.Provider value={{ userName: "" }}>
          <Body />
        </UserContext.Provider>
      </RouterProvider>
    );
    expect(screen.getByTestId("login-container")).toBeDefined();
    expect(screen.getByText("Your name, please?")).toBeInTheDocument();
    expect(screen.getByTestId("user-input")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Let's get started !" })
    ).toBeInTheDocument();
  });

  test("login prompt should disappear after user enters valid name", () => {
    render(
      <RouterProvider router={router}>
        <UserContext.Provider value={{ userName: "" }}>
          <Body />
        </UserContext.Provider>
      </RouterProvider>
    );

    const nameInput = screen.getByTestId("user-input");
    const submitButton = screen.getByRole("button", {
      name: "Let's get started !",
    });
    fireEvent.change(nameInput, { target: { value: "Girik" } });
    fireEvent.click(submitButton);
    expect(screen.queryByTestId("login-container")).toBeNull();
  });

  // test("login prompt should not disappear if user enters invalid name", () => {
  //   render(
  //     <RouterProvider router={router}>
  //       <UserContext.Provider value={{ userName: "" }}>
  //         <Body />
  //       </UserContext.Provider>
  //     </RouterProvider>
  //   );

  //   const nameInput = screen.getByTestId("user-input");
  //   const submitButton = screen.getByRole("button", {
  //     name: "Let's get started !",
  //   });
  //   fireEvent.change(nameInput, { target: { value: "" } });
  //   fireEvent.click(submitButton);
  //   expect(screen.queryByTestId("login-container")).toBeDefined();
  // });

  test("should load shimmer UI if data not fetched from Restaurants API", async () => {
    jest
      .spyOn(getRestaurantDetailsUtil, "useRestaurantDetails")
      .mockReturnValueOnce(
        Promise.reject("Restaurant API data failed in body test")
      );

    render(
      <RouterProvider router={router}>
        <UserContext.Provider>
          <Body />
        </UserContext.Provider>
      </RouterProvider>
    );
    expect(screen.queryByTestId("shimmer-container")).toBeInTheDocument();
  });

  test("shimmer UI should disappear once data fetched from API and restaurant cards should appear", async () => {
    jest
      .spyOn(getRestaurantDetailsUtil, "useRestaurantDetails")
      .mockReturnValueOnce(Promise.resolve(restaurantsDataMock));

    render(
      <RouterProvider router={router}>
        <UserContext.Provider>
          <Body />
        </UserContext.Provider>
      </RouterProvider>
    );
    await waitFor(() => {
      expect(screen.queryByTestId("shimmer-container")).toBeNull();
    });
    await waitFor(() =>
      expect(screen.getByTestId("restaurant-container")).toBeInTheDocument()
    );
    //add more assertions here
  });
});
