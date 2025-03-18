import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import TodoListItem from "../../../../src/features/todo/components/TodoListItem";
import type { Todo } from "../../../../src/features/todo/types/Todo";
import "@testing-library/jest-dom";

describe("TodoListItem", () => {
	const mockTodo: Todo = { id: 1, task: "Test Task", completed: false };
	const mockRemoveTodo = vi.fn();
	const mockCompleteTodo = vi.fn();

	beforeEach(() => {
		render(
			<TodoListItem
				todo={mockTodo}
				removeTodo={mockRemoveTodo}
				completeTodo={mockCompleteTodo}
			/>,
		);
	});

	it("should display the todo task", () => {
		expect(screen.getByText("Test Task")).toBeInTheDocument();
	});

	it("should call removeTodo when delete button is clicked", () => {
		fireEvent.click(screen.getByRole("button", { name: /delete/i }));
		expect(mockRemoveTodo).toHaveBeenCalledWith(mockTodo.id);
	});

	it("should call completeTodo when complete button is clicked", () => {
		fireEvent.click(screen.getByRole("button", { name: /complete/i }));
		expect(mockCompleteTodo).toHaveBeenCalledWith(mockTodo.id);
	});
});
