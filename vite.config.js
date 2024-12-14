import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import fs from 'fs';
import path from 'path';

// eslint-disable-next-line no-undef
const packageJsonPath = path.resolve(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'));

// https://vite.dev/config/
export default defineConfig({
	base: `/${packageJson.name}/`,
	plugins: [react(), svgr()],
	css: {
		modules: {
			localsConvention: 'camelCase',
		},
	},
});
