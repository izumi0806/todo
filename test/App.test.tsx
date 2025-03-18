import "@testing-library/jest-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";
import App from "../src/App";

describe("App Component", () => {
	test("should render the todo list title", () => {
		render(<App />);
		expect(screen.getByText("Todo List")).toBeInTheDocument();
	});

	test("should remove a todo from the list", async () => {
		render(<App />);
		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		fireEvent.change(screen.getByLabelText("タスク"), {
			target: { value: "Task to be removed" },
		});
		fireEvent.click(screen.getByRole("button", { name: "確定" }));
		expect(screen.getByText("Task to be removed")).toBeInTheDocument();

		await waitFor(() => {
			expect(
				screen.queryByRole("button", { name: "確定" }),
			).not.toBeInTheDocument();
		});

		fireEvent.click(screen.getByRole("button", { name: /delete/i }));
		expect(screen.queryByText("Task to be removed")).not.toBeInTheDocument();
	});

	test("should mark a todo as completed", async () => {
		render(<App />);
		screen.debug();
		fireEvent.click(screen.getByRole("button", { name: /add/i }));
		fireEvent.change(screen.getByLabelText("タスク"), {
			target: { value: "Task to be completed" },
		});
		fireEvent.click(screen.getByRole("button", { name: "確定" }));
		expect(screen.getByText("Task to be completed")).toBeInTheDocument();

		await waitFor(() => {
			expect(
				screen.queryByRole("button", { name: "確定" }),
			).not.toBeInTheDocument();
		});

		fireEvent.click(screen.getByRole("button", { name: /complete/i }));
		expect(screen.queryByText("Task to be completed")).not.toBeInTheDocument();
	});
});
