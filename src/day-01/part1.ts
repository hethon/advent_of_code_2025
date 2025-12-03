import { readInput } from '../utils/readFile';


// parse input
const lines = readInput(__dirname, "input.txt").trim().split("\n");
const rotation_deltas = lines.map(line => {
	let val = parseInt(line.slice(1));
	if (line.startsWith("L")) val *= -1;
	return val;
});
// ---

let password = 0;
let current_rotation = 50;

for (const delta of rotation_deltas) {
	current_rotation = (current_rotation + delta) % 100;

	if (current_rotation === 0) {
		password += 1;
	}
}

console.log(password);
