import { create } from 'zustand'

const useUpgradeStore = create((set) => ({
	upgradeTrees: {
		'Code Editor': {
			level: 0,
			type: 'FPS',
			tree: [
				{
					description: "You write code with pen and paper. It\'s not very effective.",
					cost: 100,
					amount: 0.2
				},
				{
					description: "You discovered notepad and it feels god-like.",
					cost: 200,
					amount: 2
				},
				{
					description: 'No one can stop you while using Sublime Text.',
					cost: 500,
					amount: 5
				},
				{
					description: 'You started using VS Code.. like all of us..',
					cost: 2000,
					amount: 10
				},
				{
					description: 'Is there anything more powerful than Vim?',
					cost: 5000,
					amount: 15
				}
			]
		},

		'Package Manager': {
			level: 0,
			type: 'FPC',
			tree: [
				{
					description: "You manually copy-paste whole libraries into your codebase for now.",
					cost: 100,
					amount: 0.1
				},
				{
					description: "You found out about npm and it's an absolute game changer.",
					cost: 200,
					amount: 2
				},
				{
					description: 'yarn is so fast that you can argue more on Stack Overflow.',
					cost: 500,
					amount: 5
				},
				{
					description: 'pnpm installs so quick that you can actually read the documentation.',
					cost: 2000,
					amount: 10
				},
				{
					description: 'You feel like a wizard casting \'bun install\'.',
					cost: 5000,
					amount: 15
				}
			]
		},
		'Operating System': {
			level: 0,
			type: 'FPS',
			tree: [
				{
					description: "No OS. You\'re screaming code into the abyss, hoping for an output.",
					cost: 100,
					amount: 0.1
				},
				{
					description: "Your Windows PC needs to reboot every time you sneeze.",
					cost: 200,
					amount: 2
				},
				{
					description: 'MacOS taught you about the terminal (after selling a kidney to afford it).',
					cost: 500,
					amount: 5
				},
				{
					description: 'You installed Linux and started automating tasks that would otherwise take 10 seconds.',
					cost: 2000,
					amount: 10
				},
				{
					description: 'TempleOS - you can finally ship your code directly to God.',
					cost: 5000,
					amount: 15
				}
			]
		},

		'Debugging Technique': {
			level: 0,
			type: 'FPC',
			tree: [
				{
					description: "You manually copy-paste whole libraries into your codebase for now.",
					cost: 100,
					amount: 0.1
				},
				{
					description: "Your app is 90% \'console.log\' and you still don\'t know what\'s wrong.",
					cost: 200,
					amount: 2
				},
				{
					description: 'You step up your game and learn about Chrome Devtools.',
					cost: 500,
					amount: 5
				},
				{
					description: 'Let the automated debuggers do the work. Just don\'t ask how they do it.',
					cost: 2000,
					amount: 10
				},
				{
					description: 'You achieved telepathic debugging - you know where the bug is without even looking.',
					cost: 5000,
					amount: 15
				}
			]
		},

		'Vulnerability Patching': {
			level: 0,
			type: 'FPC',
			tree: [
				{
					description: "A guy in a hoodie with a laptop intercepted your code over public WI-FI.",
					cost: 100,
					amount: 0.1
				},
				{
					description: "You have yet to learn what the \'S\' in HTTPS stands for.",
					cost: 200,
					amount: 2
				},
				{
					description: 'Your JWTs last forever, like a vampire that refuses to die.',
					cost: 500,
					amount: 5
				},
				{
					description: 'Your data is gone because what even is SQL Injection?',
					cost: 2000,
					amount: 10
				},
				{
					description: 'You finally patched everything! But hardcoded your API keys..',
					cost: 5000,
					amount: 15
				}
			]
		},
	},

	advance: (upgradeTreeName, upgradeTree) => {
		
		set((state) => ({
			upgradeTrees: { 
				...state.upgradeTrees, 
				[upgradeTreeName]: { 
					...state.upgradeTrees[upgradeTreeName], 
					level: upgradeTree.level + 1 
				}
			}
		}))
	}
}))

export default useUpgradeStore
