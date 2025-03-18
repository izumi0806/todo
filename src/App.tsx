import TodoList from "@/features/todo/components/TodoList";
import useTodoHook from "@/features/todo/hooks/useTodoHook";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import AddTodoDialogButton from "./features/todo/components/AddTodoDialog";

function App() {
	const {
		todoList,
		getTodoList,
		addTodo,
		removeTodo,
		updateTodo,
		completeTodo,
	} = useTodoHook();

	useEffect(() => {
		getTodoList();
	}, []);

	return (
		<>
			<div className="relative h-full w-full">
				<Typography variant="h4">Todo List</Typography>
				<AddTodoDialogButton addTodo={addTodo} />
				<TodoList
					todoList={todoList}
					removeTodo={removeTodo}
					updateTodo={updateTodo}
					completeTodo={completeTodo}
				/>
			</div>
		</>
	);
}

export default App;
