import type { Config } from 'tailwindcss'

const config: Config = {
	darkMode: ['class', '[data-theme="dark"]'],
	content: [
		'./pages/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
		'./src/**/*.{ts,tsx}',
	],
}

export default config
