import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { Todo } from "../types/Todo";
import { IconButton } from "@mui/material";

type TodoListItemProps = {
	todo: Todo;
	removeTodo: (id: number) => void;
	completeTodo: (id: number) => void;
};

const TodoListItem = (props: TodoListItemProps) => {
	const { todo, removeTodo, completeTodo } = props;
	return (
		<div className="flex items-center border-b border-gray-300 py-2 px-4">
			<div className="flex flex-1 items-center">
				<p className="text-sm">{todo.task}</p>
			</div>
			<div className="flex space-x-2">
				<IconButton onClick={() => removeTodo(todo.id)}>
					<DeleteIcon color="error" />
				</IconButton>
				<IconButton onClick={() => completeTodo(todo.id)}>
					<CheckCircleIcon color="success" />
				</IconButton>
			</div>
		</div>
	);
};

export default TodoListItem;
