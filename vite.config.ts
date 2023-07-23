import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import path from "path";
import alias from "@rollup/plugin-alias";
export default defineConfig({
	server: {
		proxy: {
			'/api': {
				target: 'http://localhost:3300/api/v1',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	},
	plugins: [
		sveltekit(),
		alias({
			entries: [
				{
					find: '@',
					replacement: path.resolve(__dirname, './src')
				}
			]
		})
	],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
