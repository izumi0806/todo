import * as path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		globals: true,
		environment: "jsdom",
		include: ["test/**/*.test.{js,ts,jsx,tsx}"],
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
		coverage: {
			reporter: ["text", "json", "html"],
		},
	},
});
