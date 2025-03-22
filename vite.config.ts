import path, { resolve } from "node:path";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	base: "/todo/",
	root: "src",
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "src"), // `@` を `src` にマッピング
		},
	},
	build: {
		// distフォルダに出力
		outDir: resolve(__dirname, "dist"),
	},
});
