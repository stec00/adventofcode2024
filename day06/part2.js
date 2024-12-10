// Example usage
const map = [
"....................................#.............#...............#..............................................................#",
"........................#....#............................................##.......#...................................#..........",
".........#...............................................#..#.......#...#...........#......................#......................",
"...........#...........#...................#...........#.........................................#............................#...",
"................................................................#.....#...............................................#........#..",
"......................#..........#.#.......................................#...#........................................#.........",
"....#.......................#............#............#....#....................................................................#.",
"#.........#....................#.............#......................#............#....#..#................#........#.#.....#......",
".................##...................#.................................#.........................................................",
"...........#...................................................................##..........#..........#.....#...............#.....",
"..................................#.........#....................................#....#..#...........................#............",
"............#.....#............................................................#......................#........#........#.........",
".........#.........#......#...#.........#..............................................................................#..........",
".........#..............................#..............#...........#.......................................#....#.............#...",
"...................................................................................................#..........#...................",
"....#.........#......................#..........#.........................................................................#......#",
"..............#.#........#..#......#..............................................................................................",
"#....#....#........................#...#...........................................#.....................#..#.......#...#.........",
"...............................#.........#........#.....................................#.........................................",
"................................#.....#..........#..........................................................#.....................",
"...#.......#...........#.....................................................#.....#...#.#..#...............#.#...................",
"...#...............#..#..................#.........................#................................................#.............",
".#................#................................................#.#...........................#.............#................#.",
"....................#...............#..............#.........................................................#................#...",
"...............................................................................................#..........#.......................",
"............#......................................#....................................................#.........................",
".......#.....#..................#....................................................................#..................#.....#...",
"...........#..........................................#.#.........................................................................",
"..........#..............................#.................................................................#..............#.......",
"...............#.........#...........#..........................................................................#.................",
"...............##................................................................##...#....................#....................#.",
"............##..........................................................................#....#............#.......................",
"........#.............#.#..#......#..#...........................#........#...........................#....................#......",
"...............................................................#........................#.#...................................#...",
"..#.....#.#............................#..........................................................................................",
"............................................#.#...........#....#............#.....#.......#..............#...................#....",
"..........................#............................#.#........................#......................#....#...................",
"..................#.......................#....#....................................#....................................#........",
"................#............................................#..............#...............................................#.#...",
".............#.......................#...#............#...........................................................#..............#",
"#.#...#.............................................................#.#...........................................................",
"....#.............#..#.............................................#.............................#................................",
"..........................................#........#....#.........................#......................................#........",
"............................#..........#...........................#.......................................#......................",
"...#.......#..............#...........................#................................................#.......................#..",
".#...............................#......................#...................#.........#...........................................",
".#.....#......#........................#........#...............#..............................................#..........#.......",
"...........................................................................................................................#......",
"........................#......................................#............#.....................................................",
"........#.....#........#...............#.............#....#..........................................#.#.........................#",
"...........#........#.......#.........................................#.............................................#.............",
".........#......#..........................................................................................#.....#................",
"........................................#...#...............#..................................#...........#......................",
".......................................#.......#.#....#...#.................#.....#......^#.......................................",
".#............#......#..........................................#.#......................................#............#.......#...",
".................#.......#.........#........#..........................................................................#.....#....",
"...#..............................#.................#.........................#.........#.........................................",
"...#.................................................#..............#......................................................#......",
"....................#.#...............................#................#.....##...................................................",
".........#...#....#.............................#.........#....#.....##............................#........#.....................",
"........#....#..............................#..................................................................#....#......#......",
"..........................#..#...........#..............#...............#....#..........#.........................................",
"...........#..........#...........................................#.......................##......................................",
".............................................................................................#...................#...........#....",
"...............................#................#.....#...#..#....#...............................................................",
"#...#........#...#...................#.......#......................................................................#.............",
"#..................#..................................................................................#....................#..#..#",
".#............#..#...........#................#.......#........#.........#...........#..............#.............................",
".......................................#....#........#..............................................#..........#..................",
"...#....#........................................#....#...........................................................#....#.......#..",
"..............#....#.......................................#.............#..#.................................#...................",
"........................................#.#.......................#.#.......................................#.....................",
"......................#...#....................................................................................#.................#",
"........#...#...........#.....................#......#..........................................#.....................#.....#.....",
"...#......................#..........#............................................................................................",
"..............................................................................#..........#.....#..........#...#...................",
"........#............#.............#........##..................................................#...#.............................",
"..#....................................................................#.................#..........#.......#.........##..........",
"...................#.....................................................#......................#...#..#............#.............",
"......................................##.........#........................................................#...........#...........",
"..#..................................................#........................#...................#...............#...............",
"....#...................................#........#........................................................#.....................#.",
"....#.#......#..........................................#........................#................................................",
"#........................#.....................................................................................#...#..............",
".#.............................#.......#...............#............#............#.....#.....#........#......#....................",
"....#......................................................#.......................................................#.......#...#..",
"............#.........................#.......##..............................#...................#.....#......#..................",
"........................................................................................#........................#.........#......",
".#.......................#.........................#................#..##.........#..#.....................................#......",
"#...............#................#...#........#.........#......................#...................................#......#.#.....",
"................#............................##...................................#............#.....................#............",
"..#...#.................................................................#.........#.........................##................#...",
"...........................................#.................#............................#..#..............#......#.#............",
".................#...........#..................#................#........#...............................#.................#..#.#",
".......#.......................#................................#.#...............................................................",
".......#.........#.........#...........................................................................#.........#...........#....",
".....#.#................................................#.......#..........#......................................................",
"......................#.........................................#................#...............................#................",
"..........................#....#.......#....#.................#.#.................................................##...#..#.......",
"......................................................#.......#..#.....#............#...#..................................#......",
".........#.#...............................#..........#...............................#...............#......................#....",
"..#...........................#.............................#............#...............#......#........................#........",
".........#................................................................#....#..#.....##................#.........#.......#.....",
"...#....................................#...........#.............#...........................................#...................",
"#.........................#..........#.....................#......#.............#...........#...................................##",
"....................#......#...#.#.............................................#.............................#..............#.....",
".....................#...#.....#......#.............................#........#......#.............#...............................",
"..................#.............................................................................#..............#..................",
".......#...........................#........................................................................#...............#.....",
"............................................#......................................#..............................................",
".....#..........#..................#.............#................................................#..................#...#......##",
"..............................................................#........................................#...............#..........",
"...................................#.#........................................................#.#...........#.....................",
"...#....................#........#.....................#..................................#..............#..#.....................",
".................#....................#...#.....#..........#......#...........................#.#............................#.#..",
"....................................................#.............#..#.....#......................................................",
".......#..............................#...............................................#.........................#.......#.........",
"........#...............#.................................................................................................#......#",
"#.#.#..............................................................#..............#................#...........#..........#.......",
"..#.....................................#...........#................................................#................#......#....",
"#.........................................................#...#................................#......#.#..........#..............",
".#...#................#......#................##...#.........#.............#........#.........#........#.....#....................",
"................#..........................#.#................................................#.............#.....................",
"..............#................................................................#.............................#.............#......",
"..................................#...................................#...........................................................",
"........#.................#....#.........................................................................................#........",
"...........#...................#........#.......#................................................#..#......#..#...................",
".........#.....#......................................................................#.........................#.....#...........",
"..........................................................#.............................................#.....#...................",
"...............#.##.................#....#.................#...#.......................#...................#........#............."
];

function findLoopObstructionPositions(map) {
    const directions = ['^', '>', 'v', '<'];
    const moves = { '^': [-1, 0], '>': [0, 1], 'v': [1, 0], '<': [0, -1] };
    const turnRight = { '^': '>', '>': 'v', 'v': '<', '<': '^' };

    const rows = map.length;
    const cols = map[0].length;

    let guardPos, guardDir;

    // Find the initial position and direction of the guard
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (directions.includes(map[r][c])) {
                guardPos = [r, c];
                guardDir = map[r][c];
                break;
            }
        }
    }

    const simulateGuard = (map, obstruction) => {
        const visited = new Set();
        let [row, col] = guardPos;
        let dir = guardDir;

        while (true) {
            const posKey = `${row},${col},${dir}`;
            if (visited.has(posKey)) return true; // Loop detected
            visited.add(posKey);

            let [dr, dc] = moves[dir];
            let [newRow, newCol] = [row + dr, col + dc];

            // Check bounds
            if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
                return false; // Guard leaves the map
            }

            // Check for obstruction
            if (
                map[newRow][newCol] === '#' ||
                (obstruction[0] === newRow && obstruction[1] === newCol)
            ) {
                dir = turnRight[dir];
            } else {
                [row, col] = [newRow, newCol];
            }
        }
    };

    let obstructionPositions = 0;

    // Try placing an obstruction at each empty position
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (map[r][c] === '.' && !(r === guardPos[0] && c === guardPos[1])) {
                // Simulate the guard's behavior with an obstruction at (r, c)
                if (simulateGuard(map, [r, c])) {
                    obstructionPositions++;
                }
            }
        }
    }

    return obstructionPositions;
}

console.log(findLoopObstructionPositions(map));