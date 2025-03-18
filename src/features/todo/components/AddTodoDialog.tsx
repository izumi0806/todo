import Dialog from "@/components/Dialog";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IconButton, TextField } from "@mui/material";
import { useState } from "react";

type AddTodoDialogButtonProps = {
	addTodo: (task: string) => void;
};

const AddTodoDialogButton = (props: AddTodoDialogButtonProps) => {
	const { addTodo } = props;
	const [isOpen, setIsOpen] = useState(false);
	const [task, setTask] = useState("");

	const onClose = () => {
		setIsOpen(false);
		setTask("");
	};
	const handleOkClick = () => {
		addTodo(task);
		onClose();
	};

	return (
		<>
			<IconButton
				sx={{ position: "absolute", right: 0, bottom: 0 }}
				onClick={() => setIsOpen(true)}
				aria-label="add"
			>
				<AddCircleOutlineIcon fontSize="large" color="primary" />
			</IconButton>

			<Dialog
				isOpen={isOpen}
				title={"タスク追加"}
				onClose={onClose}
				ok={{ onClick: handleOkClick }}
			>
				<TextField
					label="タスク"
					value={task}
					onChange={(e) => setTask(e.target.value)}
					fullWidth
				/>
			</Dialog>
		</>
	);
};

export default AddTodoDialogButton;
