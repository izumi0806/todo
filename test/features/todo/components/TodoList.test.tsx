import { render, screen } from "@testing-library/react";
import React from "react";
import TodoList from "../../../../src/features/todo/components/TodoList";
import type { Todo } from "../../../../src/features/todo/types/Todo";
import "@testing-library/jest-dom";

describe("TodoList", () => {
	describe("TodoList", () => {
		it("should render a message when the todo list is empty", () => {
			render(
				<TodoList
					todoList={[]}
					removeTodo={() => {}}
					updateTodo={() => {}}
					completeTodo={() => {}}
				/>,
			);
			expect(
				screen.getByText("Todoを追加してみましょう！"),
			).toBeInTheDocument();
		});

		it("should render a list of todos", () => {
			const todos: Todo[] = [
				{ id: 1, task: "Test Todo 1", completed: false },
				{ id: 2, task: "Test Todo 2", completed: false },
			];
			render(
				<TodoList
					todoList={todos}
					removeTodo={() => {}}
					updateTodo={() => {}}
					completeTodo={() => {}}
				/>,
			);
			expect(screen.getByText("タスク")).toBeInTheDocument();
			expect(screen.getByText("Test Todo 1")).toBeInTheDocument();
			expect(screen.getByText("Test Todo 2")).toBeInTheDocument();
		});
	});
});
