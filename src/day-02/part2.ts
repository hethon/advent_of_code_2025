import { readInput } from '../utils/readFile';


// parse input
const ranges_str = readInput(__dirname, "input.txt").trim().split(",");
const ranges = ranges_str.map(rs => {
	const [s, e] = rs.split("-");
	return [parseInt(s), parseInt(e)];
});
// ---


function is_valid_id(id: string): boolean {
	const doubled = id.repeat(2);
    const trimmed = doubled.slice(1, doubled.length - 1);
    return trimmed.includes(id);
}


let invalid_ids_sum = 0;
for (const [start, end] of ranges) {
	for (let id = start; id <= end; id++) {
		if (is_valid_id(id.toString())) {
			invalid_ids_sum += id;
		}
	}
}

console.log(invalid_ids_sum);
