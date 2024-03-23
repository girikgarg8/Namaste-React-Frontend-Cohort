import { screen, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import About from "../src/components/About";
import UserContext from "../src/utils/UserContext";

describe("About Us component test cases", () => {
  it("should render about us component", () => {
    render(
      <UserContext.Provider value={{ userInfo: { userName: "Girik" } }}>
        <About />
      </UserContext.Provider>
    );
    expect(screen.getByTestId("about")).toBeInTheDocument();
  });

  it("should render a hello message in about us component", () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    expect(screen.getByText("Hello Girik ! 👋")).toBeInTheDocument();
  });

  it("should render the about text in about us component", () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    expect(
      screen.getByText(
        "This is Food Villa, a food ordering platform designed by Girik Garg"
      )
    ).toBeInTheDocument();
  });

  it("should render linkedin connect text in about us component", () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    expect(
      screen.getByText("Feel free to connect with me on")
    ).toBeInTheDocument();
  });

  it("should render linkedin link in about us component", async () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    const linkedinHyperLink = await waitFor(() => screen.findByRole("link"));
    expect(linkedinHyperLink).toBeInTheDocument();
    expect(linkedinHyperLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/girik-garg"
    );
  });

  it("should render linkedin logo in about us component", async () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    const linkedinLogo = await waitFor(() =>
      screen.findByTestId("linkedin-icon")
    );
    expect(linkedinLogo).toBeInTheDocument();
  });

  it("should render the wave bye image in about us component", () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    const waveByeImage = screen.getByAltText("wave-bye");
    expect(waveByeImage).toBeInTheDocument();
  });

  it("should render footer in the about us component", () => {
    render(
      <UserContext.Provider value={{ userName: "Girik" }}>
        <About />
      </UserContext.Provider>
    );
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
