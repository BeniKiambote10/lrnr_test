import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/Home";
import { BrowserRouter } from "react-router-dom";

describe("HomePage Component", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    );
  });

  test("renders the HomePage component without crashing", () => {
    expect(screen.getByText(/Your guided path/i)).toBeInTheDocument();
  });

  test("renders Personalized Quizzes box", () => {
    const personalizedQuizzes = screen.getByText(/Personalized Quizzes/i);
    expect(personalizedQuizzes).toBeInTheDocument();
  });

  test("renders Personal SME box", () => {
    const personalSME = screen.getByText(/Personal SME/i);
    expect(personalSME).toBeInTheDocument();
  });

  test("renders the LRNR logo image", () => {
    const logo = screen.getByAltText("LRNR logo");
    expect(logo).toBeInTheDocument();
  });

  test("renders the BEGIN JOURNEY button", () => {
    const button = screen.getByText(/BEGIN JOURNEY/i);
    expect(button).toBeInTheDocument();
  });

  test("BEGIN JOURNEY button has the correct link", () => {
    const button = screen.getByRole("button", { name: /BEGIN JOURNEY/i });
    expect(button.closest("a")).toHaveAttribute("href", "/quiz-generation");
  });
});
