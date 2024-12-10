function parseInput(input) {
    return input.trim().split('\n').map(line => line.split(''));
}

function findAntennas(map) {
    const antennas = {};
    for (let y = 0; y < map.length; y++) {
        for (let x = 0; x < map[y].length; x++) {
            const freq = map[y][x];
            if (freq !== '.') {
                if (!antennas[freq]) antennas[freq] = [];
                antennas[freq].push([x, y]);
            }
        }
    }
    return antennas;
}

function addAntinode(x, y, width, height, antinodes) {
    if (x >= 0 && x < width && y >= 0 && y < height) {
        antinodes.add(`${x},${y}`);
    }
}

function findAntinodes(antennas, width, height) {
    const antinodes = new Set();
    for (const [freq, positions] of Object.entries(antennas)) {
        const n = positions.length;
        if (n > 1) {
            for (let i = 0; i < n; i++) {
                const [x1, y1] = positions[i];
                for (let j = 0; j < n; j++) {
                    if (i === j) continue;
                    const [x2, y2] = positions[j];
                    const dx = x2 - x1;
                    const dy = y2 - y1;

                    // Add antinodes between antennas and extensions beyond them
                    addAntinode(x1, y1, width, height, antinodes);
                    addAntinode(x2, y2, width, height, antinodes);
                    addAntinode(x1 - dx, y1 - dy, width, height, antinodes);
                    addAntinode(x2 + dx, y2 + dy, width, height, antinodes);

                    // Check for all intermediate points on the line
                    let k = 1;
                    while (true) {
                        const intX = x1 + dx * k;
                        const intY = y1 + dy * k;
                        if (intX >= 0 && intX < width && intY >= 0 && intY < height) {
                            antinodes.add(`${intX},${intY}`);
                        } else {
                            break;
                        }
                        k++;
                    }
                }
            }
        }
    }
    return antinodes.size;
}

function solve(input) {
    const map = parseInput(input);
    const width = map[0].length;
    const height = map.length;
    const antennas = findAntennas(map);
    return findAntinodes(antennas, width, height);
}

const input = `
....................8.D.........Y...........c.....
....f.............D......O...........Y............
.......z..........7.N..........g..................
..........h...........9g.7....................Y...
.............8...............................c....
...9..8...............L........D....O.....l.......
..........f.9.......h.........................l...
...z...B..........................................
.................M.....C.....OR7.Y..g..........l..
........................M.......N.................
...............h..................TD....H.........
......z......M........C8.......N.......m.T........
......O.......................................A...
...........a...........h..........................
................B..................j..............
..............v..f..........g.....................
.......N..........s.M.........n..............Q....
...............s.........j.......................A
......................a......................T...b
........s....v......H..c..............j..i....m...
.......................a........2H.......m..V.....
................n.B..........o.....H......2.......
.....3.......s.B..............x......S..K.........
.3.G..................J................V...l.x..T.
....3.......................E..................V..
3..........................E..........V...i.......
...............v.......n.E...................2.i..
..F.........r.e......n....E...........A..Q.....K..
..z................................A....Q.........
.................................b..Q...d.Sw......
..G...0..e............v.......Z...j.....m...b.....
..y.............0.a.............................K.
.............Gp....Z.................4......S.....
....oJ....G........e.........Z............b.X.....
C........o.r........WL..1.......X........K.....d..
..................Z1.....r...............F........
............L.4................1.6..............tF
...y...............L......1............26.t.......
......e.k......y........I......x......d........t.R
.......0.........k...............d.........tWR..x.
..........q.....r......J..................F..P..w.
..........................5..........XwW..........
...........0....y.............J.............6p....
..q...k.......................I.....4........SR...
.........q..o.......P................W............
.............q.IP..............................p..
.....k...................w.............X.......f..
.............P...............4..................p.
.................I..........5.....................
.C.................................5...6..........`;

console.log(solve(input));
