import { create } from 'zustand'

const useUpgradeStore = create((set) => ({
	upgradeTrees: {
		'Code Editor': {
			level: 0,
			maxLevel: 5,
			type: 'FPS',
			tree: [
				{
					description: "",
					upgradeCost: 10,
					upgradeIncrease: 1
				},
				{
					description: "You write code with pen and paper. It\'s not very effective.",
					upgradeCost: 100,
					upgradeIncrease: 0.2
				},
				{
					description: "You discovered notepad and it feels god-like.",
					upgradeCost: 200,
					upgradeIncrease: 2
				},
				{
					description: 'No one can stop you while using Sublime Text.',
					upgradeCost: 500,
					upgradeIncrease: 5
				},
				{
					description: 'You started using VS Code.. like all of us..',
					upgradeCost: 2000,
					upgradeIncrease: 10
				},
				{
					description: 'Is there anything more powerful than Vim?',
				}
			]
		},

		'Package Manager': {
			level: 0,
			maxLevel: 5,
			type: 'FPC',
			tree: [
				{
					description: "",
					upgradeCost: 10,
					upgradeIncrease: 1
				},
				{
					description: "You manually copy-paste whole libraries into your codebase.",
					upgradeCost: 100,
					upgradeIncrease: 0.1
				},
				{
					description: "You found out about npm and it's an absolute game changer.",
					upgradeCost: 200,
					upgradeIncrease: 2
				},
				{
					description: 'yarn is so fast that you can argue more on Stack Overflow.',
					upgradeCost: 500,
					upgradeIncrease: 5
				},
				{
					description: 'pnpm installs so quick that you can actually read the documentation.',
					upgradeCost: 2000,
					upgradeIncrease: 10
				},
				{
					description: 'You feel like a wizard casting \'bun install\'.',
				}
			]
		},
		'Operating System': {
			level: 0,
			maxLevel: 5,
			type: 'FPS',
			tree: [
				{
					description: "",
					upgradeCost: 10,
					upgradeIncrease: 1
				},
				{
					description: "No OS. You\'re screaming code into the abyss, hoping for an output.",
					upgradeCost: 100,
					upgradeIncrease: 0.1
				},
				{
					description: "Your Windows PC needs to reboot every time you sneeze.",
					upgradeCost: 200,
					upgradeIncrease: 2
				},
				{
					description: 'MacOS taught you about the terminal (after selling a kidney to afford it).',
					upgradeCost: 500,
					upgradeIncrease: 5
				},
				{
					description: 'You installed Linux and started automating 5 second tasks.',
					upgradeCost: 2000,
					upgradeIncrease: 10
				},
				{
					description: 'TempleOS - you can finally ship your code directly to God.',
				}
			]
		},

		'Debugging Technique': {
			level: 0,
			maxLevel: 5,
			type: 'FPC',
			tree: [
				{
					description: "",
					upgradeCost: 10,
					upgradeIncrease: 0.5
				},
				{
					description: "Your app is 90% \'console.log\' instructions and you still don\'t know what\'s wrong.",
					upgradeCost: 200,
					upgradeIncrease: 2
				},
				{
					description: 'You step up your game and learn about Chrome Devtools.',
					upgradeCost: 500,
					upgradeIncrease: 5
				},
				{
					description: 'Let the automated debuggers do the work. Just don\'t ask how they do it.',
					upgradeCost: 2000,
					upgradeIncrease: 10
				},
				{
					description: 'You achieved telepathic debugging - you know where the bug is without even looking.',
				}
			]
		},

		'Vulnerability Patching': {
			level: 0,
			maxLevel: 5,
			type: 'FPS',
			tree: [
				{
					description: "",
					upgradeCost: 10000,
					upgradeIncrease: 100
				},
				{
					description: "A guy in a hoodie with a laptop intercepted your code over public WI-FI.",
					upgradeCost: 50000,
					upgradeIncrease: 200
				},
				{
					description: "You have yet to learn what the \'S\' in HTTPS stands for.",
					upgradeCost: 2000000,
					upgradeIncrease: 500
				},
				{
					description: 'Your JWTs last forever, like a vampire that refuses to die.',
					upgradeCost: 10000000,
					upgradeIncrease: 1000
				},
				{
					description: 'Your data is gone because what even is SQL Injection?',
					upgradeCost: 50000000,
					upgradeIncrease: 5000
				},
				{
					description: 'You finally patched everything! But hardcoded your API keys..',
				}
			]
		},
	},

	advance: (upgradeTreeName, upgradeTree) => {
		if (upgradeTree.level < upgradeTree.maxLevel)
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
