import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { vi } from "vitest";
import Dialog from "../../src/components/Dialog";

describe("Dialog", () => {
	const mockOnClose = vi.fn();
	const mockOkOnClick = vi.fn();

	const props = {
		isOpen: true,
		onClose: mockOnClose,
		title: "Test Dialog",
		text: "This is a test dialog.",
		ok: {
			label: "OK",
			onClick: mockOkOnClick,
		},
		cancel: {
			label: "Cancel",
			onClick: mockOnClose,
		},
	};

	it("should render the dialog with title and text", () => {
		render(<Dialog {...props} />);
		expect(screen.getByText("Test Dialog")).toBeInTheDocument();
		expect(screen.getByText("This is a test dialog.")).toBeInTheDocument();
	});

	it("should call onClose when cancel button is clicked", () => {
		render(<Dialog {...props} />);
		fireEvent.click(screen.getByText("Cancel"));
		expect(mockOnClose).toHaveBeenCalledTimes(1);
	});

	it("should call ok.onClick when OK button is clicked", () => {
		render(<Dialog {...props} />);
		fireEvent.click(screen.getByText("OK"));
		expect(mockOkOnClick).toHaveBeenCalledTimes(1);
	});

	it("should render children", () => {
		render(
			<Dialog {...props}>
				<div>Child Content</div>
			</Dialog>,
		);
		expect(screen.getByText("Child Content")).toBeInTheDocument();
	});
});
