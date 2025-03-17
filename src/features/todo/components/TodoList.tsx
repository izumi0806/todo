import type { Todo } from "../types/Todo";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
	todoList: Todo[];
	removeTodo: (id: number) => void;
	updateTodo: (todo: Todo) => void;
	completeTodo: (id: number) => void;
};

const TodoList = (props: TodoListProps) => {
	const { todoList, removeTodo, completeTodo } = props;
	return (
		<>
			{todoList.length === 0 ? (
				<p>Todoを追加してみましょう！</p>
			) : (
				<>
					<div className="flex items-center border-b border-gray-300 py-2 px-4">
						<p className="text-sm">タスク</p>
					</div>
					{todoList
						.filter((todo) => !todo.completed)
						.map((todo) => (
							<TodoListItem
								key={todo.id}
								todo={todo}
								removeTodo={removeTodo}
								completeTodo={completeTodo}
							/>
						))}
				</>
			)}
		</>
	);
};

export default TodoList;
