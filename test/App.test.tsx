import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("App Component", () => {
	test("renders Vite + React heading", () => {
		render(<App />);
		const headingElement = screen.getByText(/Vite \+ React/i);
		expect(headingElement).toBeInTheDocument();
	});

	test("renders initial count value", () => {
		render(<App />);
		const countElement = screen.getByText(/count is 0/i);
		expect(countElement).toBeInTheDocument();
	});

	test("increments count on button click", () => {
		render(<App />);
		const buttonElement = screen.getByRole("button", { name: /count is/i });
		fireEvent.click(buttonElement);
		const countElement = screen.getByText(/count is 1/i);
		expect(countElement).toBeInTheDocument();
	});
});
