import { act, renderHook } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import useTodoHook from "../../../../src/features/todo/hooks/useTodoHook";

const localStorageMock = (() => {
	let store: { [key: string]: string } = {};

	return {
		getItem: (key: string): string | null => store[key] || null,
		setItem: (key: string, value: string) => {
			store[key] = String(value);
		},
		clear: () => {
			store = {};
		},
	};
})();

Object.defineProperty(window, "localStorage", {
	value: localStorageMock,
});

describe("useTodoHook", () => {
	test("should initialize with an empty todo list", () => {
		const { result } = renderHook(() => useTodoHook());
		expect(result.current.todoList).toEqual([]);
	});

	test("should add multiple todos to the list", () => {
		const { result } = renderHook(() => useTodoHook());
		act(() => {
			result.current.addTodo("Test todo 1");
		});
		act(() => {
			result.current.addTodo("Test todo 2");
		});
		expect(result.current.todoList).toEqual([
			{ id: 1, task: "Test todo 1", completed: false },
			{ id: 2, task: "Test todo 2", completed: false },
		]);
	});

	test("should remove a todo from the list", () => {
		const { result } = renderHook(() => useTodoHook());
		act(() => {
			result.current.addTodo("Test todo");
		});
		act(() => {
			result.current.removeTodo(1);
		});
		expect(result.current.todoList).toEqual([]);
	});

	test("should complete a todo in the list", () => {
		const { result } = renderHook(() => useTodoHook());
		act(() => {
			result.current.addTodo("Test todo");
		});
		act(() => {
			result.current.completeTodo(1);
		});
		expect(result.current.todoList).toEqual([
			{ id: 1, task: "Test todo", completed: true },
		]);
	});

	test("should update a todo in the list", () => {
		const { result } = renderHook(() => useTodoHook());
		act(() => {
			result.current.addTodo("Test todo");
		});
		act(() => {
			result.current.updateTodo({
				id: 1,
				task: "Updated todo",
				completed: true,
			});
		});
		expect(result.current.todoList).toEqual([
			{ id: 1, task: "Updated todo", completed: true },
		]);
	});

	test("should load todo list from local storage on initialization", () => {
		localStorageMock.setItem(
			"todoList",
			JSON.stringify([{ id: 1, task: "Initial todo", completed: false }]),
		);
		const { result } = renderHook(() => useTodoHook());
		act(() => {
			result.current.getTodoList();
		});
		expect(result.current.todoList).toEqual([
			{ id: 1, task: "Initial todo", completed: false },
		]);
	});
});
