import { useCallback, useState } from "react";
import type { Todo } from "../types/Todo";

const LOCAL_STORAGE_TODO_LIST_KEY = "todoList";

const useTodoHook = () => {
	const [todoList, setTodoList] = useState<Todo[]>([]);

	// 次の一意なIDを取得
	const getNextTodoId = () => {
		return todoList.length > 0
			? Math.max(...todoList.map((item) => item.id)) + 1
			: 1;
	};

	const getTodoList = useCallback(() => {
		const todoData = localStorage.getItem(LOCAL_STORAGE_TODO_LIST_KEY);
		if (todoData) {
			setTodoList(JSON.parse(todoData));
		}
	}, []);

	const changeTodoList = (todoList: Todo[]) => {
		setTodoList(todoList);
		localStorage.setItem(LOCAL_STORAGE_TODO_LIST_KEY, JSON.stringify(todoList));
	};

	const addTodo = useCallback(
		(task: string) => {
			changeTodoList([
				...todoList,
				{
					id: getNextTodoId(),
					task: task,
					completed: false,
				},
			]);
		},
		[todoList, getNextTodoId],
	);

	const removeTodo = useCallback(
		(id: number) => {
			changeTodoList(todoList.filter((todo) => todo.id !== id));
		},
		[todoList],
	);

	const updateTodo = useCallback(
		(todo: Todo) => {
			changeTodoList(
				todoList.map((t) => (t.id === todo.id ? { ...t, ...todo } : t)),
			);
		},
		[todoList],
	);

	const completeTodo = useCallback(
		(id: number) => {
			changeTodoList(
				todoList.map((t) =>
					t.id === id ? { ...t, completed: !t.completed } : t,
				),
			);
		},
		[todoList],
	);

	return {
		todoList,
		getTodoList,
		addTodo,
		removeTodo,
		updateTodo,
		completeTodo,
	};
};

export default useTodoHook;
