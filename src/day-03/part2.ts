import { readInput } from '../utils/readFile';


// parse input
const lines = readInput(__dirname, "input.txt").trim().split("\n");
const banks = lines.map(l => l.split("").map(s => parseInt(s)));
// ---

function largest_joltage(bank: number[], batteries_to_turn_on: number) {
	let batteries_to_remove = bank.length - batteries_to_turn_on;
	const stack: number[] = [];
	for (const d of bank) {
		while (stack.length > 0 && batteries_to_remove > 0 && stack.at(-1)! < d) {
			stack.pop();
			batteries_to_remove -= 1;
		}
		stack.push(d);
	}
	return parseInt(stack.slice(0, batteries_to_turn_on).join(""));
}

let total_joltage = 0;
for (const bank of banks) {
	const batteries_to_turn_on = 12; 
	const max_jolteg = largest_joltage(bank, batteries_to_turn_on);
	total_joltage += max_jolteg;
}

console.log(total_joltage);
