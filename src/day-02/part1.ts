import { readInput } from '../utils/readFile';


// parse input
const ranges_str = readInput(__dirname, "input.txt").trim().split(",");
const ranges = ranges_str.map(rs => {
	const [s, e] = rs.split("-");
	return [parseInt(s), parseInt(e)];
});
// ---

let invalid_ids_sum = 0;
for (const [start, end] of ranges) {
	for (let id = start; id <= end; id++) {
		const id_lenght = Math.floor(Math.log10(id)) + 1;
		
		if (id_lenght % 2 !== 0) continue;

		const left = Math.floor(id / (10 ** (id_lenght / 2)));
		const right = Math.floor(id % (10 ** (id_lenght / 2)));

		if (left === right) {
			invalid_ids_sum += id;
		}
	}
}

console.log(invalid_ids_sum);
