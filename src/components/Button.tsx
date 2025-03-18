import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = {
	variant?: "primary" | "success" | "danger" | "outline";
	size?: "sm" | "md" | "lg";
	children: ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
	variant = "primary",
	size = "md",
	children,
	className,
	...props
}: ButtonProps) => {
	return (
		<button
			className={clsx(
				"rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer",
				{
					// 色のバリエーション
					"bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400":
						variant === "primary",
					"bg-green-500 text-white hover:bg-green-600 focus:ring-green-400":
						variant === "success",
					"bg-red-500 text-white hover:bg-red-600 focus:ring-red-400":
						variant === "danger",
					"border border-gray-500 text-gray-700 hover:bg-gray-100 focus:ring-gray-400":
						variant === "outline",
				},
				{
					// サイズのバリエーション
					"px-3 py-1 text-sm": size === "sm",
					"px-4 py-2 text-base": size === "md",
					"px-5 py-3 text-lg": size === "lg",
				},
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
