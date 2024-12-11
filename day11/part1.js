function blinkStones(input, blinks) {
    let stones = input.trim().split(/\s+/).map(Number);

    for (let i = 0; i < blinks; i++) {
        let newStones = [];
        for (let stone of stones) {
            if (stone === 0) {
                newStones.push(1);
            } else if (String(stone).length % 2 === 0) {
                let str = String(stone);
                let mid = str.length / 2;
                newStones.push(Number(str.slice(0, mid)), Number(str.slice(mid)));
            } else {
                newStones.push(stone * 2024);
            }
        }
        stones = newStones;
    }
    return stones.length;
}

const input = `2701 64945 0 9959979 93 781524 620 1`;
const result = blinkStones(input, 25);
console.log(result);
