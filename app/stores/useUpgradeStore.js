import { create } from 'zustand'

const useUpgradeStore = create((set) => ({
	upgrades: [
		{
			name: 'Package Manager',
			level: 0,
			levels: [
				{
					description: "You don't know what a package manager is, so you copy-paste whole libraries into your codebase.",
					name: 'Manual installation',
					cost: 100,
					type: 'FPS',
					amount: 0.1
				},
				{
					description: "You found out about npm and it's an absolute game changer!",
					name: 'npm install',
					cost: 200,
					type: 'FPS',
					amount: 2
				},
				{
					description: 'Yarn speeds up the installation so much that you can take a shower.',
					name: 'yarn install',
					cost: 500,
					type: 'FPS',
					amount: 5
				},
				{
					description: 'pnpm speeds up the installation so much that you can take a shower.',
					name: 'pnpm install',
					cost: 2000,
					type: 'FPS',
					amount: 10
				},
				{
					description: 'bun speeds up the installation so much that you can take a shower.',
					name: 'bun install',
					cost: 5000,
					type: 'FPS',
					amount: 15
				}
			]
		},

		{
			name: 'Operating System',
			level: 0
		},

		{
			name: 'Debugging Technique',
			level: 0
		},

		{
			name: 'Vulnerability Patching',
			level: 0
		},

		{
			name: 'Code Editor',
			level: 0
		}
	]
}))

export default useUpgradeStore
