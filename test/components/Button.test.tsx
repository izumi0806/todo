import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test, vi } from "vitest";
import Button from "../../src/components/Button";

describe("Button Component", () => {
	test("renders children correctly", () => {
		render(<Button>Click me</Button>);
		const buttonElement = screen.getByText("Click me");
		expect(buttonElement).toBeInTheDocument();
	});

	test("applies variant styles correctly", () => {
		render(<Button variant="primary">Primary</Button>);
		const buttonElement = screen.getByText("Primary");
		expect(buttonElement).toHaveClass("bg-blue-500");
	});

	test("applies size styles correctly", () => {
		render(<Button size="sm">Small</Button>);
		const buttonElement = screen.getByText("Small");
		expect(buttonElement).toHaveClass("px-3");
	});

	test("handles onClick event correctly", () => {
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Clickable</Button>);
		const buttonElement = screen.getByText("Clickable");
		fireEvent.click(buttonElement);
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	test("applies className correctly", () => {
		render(<Button className="custom-class">Custom</Button>);
		const buttonElement = screen.getByText("Custom");
		expect(buttonElement).toHaveClass("custom-class");
	});
});
