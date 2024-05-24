import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);

  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });

  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("renders an image with alt text `A picture of myself`", () => {
  // Arrange
  render(<App />);

  // Act
  const image = screen.getByAltText(/a picture of myself/i);

  // Assert
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "path/to/your/image.jpg");
});

test("renders a second-level heading with the text `About Me`", () => {
  // Arrange
  render(<App />);

  // Act
  const heading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });

  // Assert
  expect(heading).toBeInTheDocument();
});

test("renders a paragraph for the biography", () => {
  // Arrange
  render(<App />);

  // Act
  const paragraph = screen.getByRole("paragraph");

  // Assert
  expect(paragraph).toBeInTheDocument();
});

test("renders a link to the GitHub page", () => {
  // Arrange
  render(<App />);

  // Act
  const link = screen.getByRole("link", {
    name: /github/i,
    exact: false,
  });

  // Assert
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "https://github.com/yourusername");
});

test("renders a link to the LinkedIn page", () => {
  // Arrange
  render(<App />);

  // Act
  const link = screen.getByRole("link", {
    name: /linkedin/i,
    exact: false,
  });

  // Assert
  expect(link).toBeInTheDocument();
  expect(link).toHaveAttribute("href", "https://www.linkedin.com/in/yourusername/");
});