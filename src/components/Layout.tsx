import type { ReactNode } from "react";

type LayoutProps = {
	children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
	return (
		<div className="flex min-h-screen justify-center bg-gray-100">
			<div className="w-10/12 min-h-[90%] bg-white shadow-lg rounded-xl p-6 my-8">
				{children}
			</div>
		</div>
	);
};

export default Layout;
