import { render, screen, within, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../src/components/Contact";

describe("Contact Us Page Test Cases", () => {
  it("should load contact us component", () => {
    render(<Contact />);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("should load heading in the contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Need to get in touch?");
    expect(screen.getByText("Would love to collaborate!")).toBeInTheDocument();
  });

  it("should load socials in the contact us component", () => {
    render(<Contact />);
    const socialsList = screen.getByRole("list");
    const socialsListItems = screen.getAllByRole("listitem");
    expect(socialsList).toBeInTheDocument();
    expect(socialsListItems).toBeDefined();
    expect(socialsListItems).toHaveLength(3);
  });

  it("should load email contact in the contact us component", () => {
    render(<Contact />);
    const socialsListItems = screen.getAllByRole("listitem");
    const emailContact = socialsListItems[0];
    const emailHyperLink = within(emailContact).getByRole("link");
    expect(emailContact).toBeInTheDocument();
    expect(emailContact).toHaveTextContent("Shoot me an email");
    expect(emailHyperLink).toBeInTheDocument();
    expect(emailHyperLink).toHaveAttribute(
      "href",
      "mailto:girikgarg8@gmail.com"
    );
  });

  it("should load email icon in contact us component", async () => {
    render(<Contact />);
    const emailIcon = await waitFor(() => screen.findByTestId("email-icon"));
    expect(emailIcon).toBeInTheDocument();
  });

  it("should load linkedin contact in the contact us component", () => {
    render(<Contact />);
    const socialsListItems = screen.getAllByRole("listitem");
    const linkedinContact = socialsListItems[1];
    const linkedinHyperLink = within(linkedinContact).getByRole("link");
    expect(linkedinContact).toBeInTheDocument();
    expect(linkedinContact).toHaveTextContent("Connect on LinkedIn");
    expect(linkedinHyperLink).toBeInTheDocument();
    expect(linkedinHyperLink).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/girik-garg"
    );
  });

  it("should load linkedin icon in contact us component", async () => {
    render(<Contact />);
    const linkedinIcon = await waitFor(() => screen.findByTestId("linkedin-icon"));
    expect(linkedinIcon).toBeInTheDocument();
  });

  it("should load twitter contact in the contact us component", () => {
    render(<Contact />);
    const socialsListItems = screen.getAllByRole("listitem");
    const twitterContact = socialsListItems[2];
    const twitterHyperLink = within(twitterContact).getByRole("link");

    expect(twitterContact).toBeInTheDocument();
    expect(twitterContact).toHaveTextContent("Follow my Twitter journey");
    expect(twitterHyperLink).toBeInTheDocument();
    expect(twitterHyperLink).toHaveAttribute(
      "href",
      "https://www.twitter.com/girikgarg8"
    );
  });

  it("should load twitter icon in contact us component", async () => {
    render(<Contact />);
    const twitterIcon = await waitFor(() =>
      screen.findByTestId("twitter-icon")
    );
    expect(twitterIcon).toBeInTheDocument();
  });

  it("should render image in contact us", () => {
    render(<Contact />);
    expect(screen.getByAltText("lets-connect")).toBeInTheDocument();
  });

  it("should render footer component in contact us page", () => {
    render(<Contact />);
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
