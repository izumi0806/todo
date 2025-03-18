import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { vi } from "vitest";
import AddTodoDialogButton from "../../../../src/features/todo/components/AddTodoDialog";
import "@testing-library/jest-dom";

describe("AddTodoDialog", () => {
	it("should render the add button", () => {
		render(<AddTodoDialogButton addTodo={vi.fn()} />);
		expect(screen.getByRole("button")).toBeInTheDocument();
	});

	it("should open dialog when add button is clicked", () => {
		render(<AddTodoDialogButton addTodo={vi.fn()} />);
		fireEvent.click(screen.getByRole("button"));
		expect(
			screen.getByRole("dialog", { name: "タスク追加" }),
		).toBeInTheDocument();
	});

	it("should call addTodo with the task when OK is clicked", () => {
		const addTodoMock = vi.fn();
		render(<AddTodoDialogButton addTodo={addTodoMock} />);
		fireEvent.click(screen.getByRole("button"));
		fireEvent.change(screen.getByLabelText("タスク"), {
			target: { value: "New Task" },
		});
		fireEvent.click(screen.getByRole("button", { name: "確定" }));
		expect(addTodoMock).toHaveBeenCalledWith("New Task");
	});
});
