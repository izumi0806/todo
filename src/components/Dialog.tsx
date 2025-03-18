import {
	Box,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Dialog as MUIDialog,
} from "@mui/material";
import Button from "./Button";

type DialogProps = {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	text?: string;
	children?: React.ReactNode;
	ok?: {
		label?: string;
		onClick: () => void;
	};
	cancel?: {
		label?: string;
		onClick: () => void;
	};
	maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false;
};

const Dialog = ({
	isOpen,
	onClose,
	title,
	children,
	text,
	ok,
	cancel,
	maxWidth = "sm",
}: DialogProps) => {
	return (
		<MUIDialog open={isOpen} onClose={onClose} fullWidth maxWidth={maxWidth}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent dividers>
				{text && <DialogContentText>{text}</DialogContentText>}
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						m: "auto",
					}}
				>
					{children}
				</Box>
			</DialogContent>
			<DialogActions>
				<Button variant="success" onClick={ok?.onClick}>
					{ok?.label ?? "確定"}
				</Button>
				<Button variant="danger" onClick={onClose}>
					{cancel?.label ?? "キャンセル"}
				</Button>
			</DialogActions>
		</MUIDialog>
	);
};

export default Dialog;
