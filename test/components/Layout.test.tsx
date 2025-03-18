import { render } from "@testing-library/react";
import React from "react";
import Layout from "../../src/components/Layout";

describe("Layout", () => {
	it("should render", () => {
		const { container } = render(
			<Layout>
				<div>Test Content</div>
			</Layout>,
		);
		expect(container.firstChild).toMatchSnapshot();
	});
});
