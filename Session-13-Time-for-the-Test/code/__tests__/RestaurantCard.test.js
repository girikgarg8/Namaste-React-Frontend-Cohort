import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard, {
  withTopRatedLabel,
} from "../src/components/RestaurantCard";
import mockProps from "../__mocks__/restaurantCardMockProps";

describe("Restaurant Card component test cases", () => {

  test("should render Restaurant Card Component", () => {
    render(<RestaurantCard {...mockProps} />);
    expect(screen.getByTestId("restaurant-card")).toBeInTheDocument();
  });

  test("should render image in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    const imageContainer = screen.getByAltText("res-logo");
    expect(imageContainer).toBeInTheDocument();
    expect(imageContainer).toHaveAttribute(
      "src",
      "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/abcd1234"
    );
  });

  test("should render restaurant name in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toBeDefined();
    const restaurantName = headings[0];
    expect(restaurantName).toBeDefined();
    expect(restaurantName.textContent).toBe(" McDonalds ");
  });

  test("should render first two cuisines in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    expect(screen.getByText("Pizza, Burger")).toBeInTheDocument();
  });

  test("should render rating in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toBeDefined();
    const rating = headings[1];
    expect(rating.textContent).toBe(" 4.7 stars ");
  });

  test("should render cost for two in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toBeDefined();
    const costForTwo = headings[2];
    expect(costForTwo.textContent).toBe(" ₹450 for two");
  });

  test("should render delivery time in Restaurant Card component", () => {
    render(<RestaurantCard {...mockProps} />);
    const headings = screen.getAllByRole("heading");
    expect(headings).toBeDefined();
    const deliveryTime = headings[3];
    expect(deliveryTime.textContent).toBe(" 30 minutes ");
  });
});

describe("with top rated label Restaurant Card Component test cases", () => {
  test("should render top rated label in top rated restaurant component", () => {
    const RestaurantCardWithTopRatedLabel = withTopRatedLabel(RestaurantCard);
    render(<RestaurantCardWithTopRatedLabel {...mockProps} />);
    expect(screen.getByTestId("top-rated-label")).toBeInTheDocument();
  });

  test("should render restaurant card component in top rated restaurant component", () => {
    const RestaurantCardWithTopRatedLabel = withTopRatedLabel(RestaurantCard);
    render(<RestaurantCardWithTopRatedLabel {...mockProps} />);
    expect(screen.getByTestId("restaurant-card")).toBeInTheDocument();
  });
});
