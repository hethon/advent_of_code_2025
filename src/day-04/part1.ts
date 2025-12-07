import { readInput } from '../utils/readFile';


// parse input
const lines = readInput(__dirname, "input.txt").trim().split("\n");
let grid = lines.map(l => l.split(""));
// ---


function getadjacentPositions([i, j]: [number, number], rowLenght: number, columnLenght: number): Array<[number, number]> {
	const tl  = [i - 1, j - 1]
	const t   = [i - 1, j    ]
	const tr  = [i - 1, j + 1]

	const l   = [i, j - 1]
	const r   = [i, j + 1]

	const bl  = [i + 1, j - 1]
	const b   = [i + 1, j    ]
	const br  = [i + 1, j + 1]

	const adjacentPositions: Array<[number, number]> = [];
	for (const [i, j] of [tl, t, tr, l, r, bl, b, br]) {
		if (i < 0 || j < 0 || i >= rowLenght || j >= columnLenght) continue;
		adjacentPositions.push([i, j]);
	}

	return adjacentPositions;
}


function getAccessibleRolesOfPaper(grid: string[][]) {
	const accessibleRolesOfPaper: Array<[number, number]> = [];
	grid.forEach((row, i) => {
		row.forEach((val, j) => {
			let adjacentRollsOfPaperCount = 0;
			if (val === "@") {
				for (const [x, y] of getadjacentPositions([i, j], grid.length, grid[0].length)) {
					if (grid[x][y] === "@") {
						adjacentRollsOfPaperCount += 1;
					}
				}
				if (adjacentRollsOfPaperCount < 4) {
					accessibleRolesOfPaper.push([i, j]);
				}
			}
		});
	});

	return accessibleRolesOfPaper;
}


let accessibleRolesOfPaperCount = getAccessibleRolesOfPaper(grid).length;
console.log(accessibleRolesOfPaperCount);

