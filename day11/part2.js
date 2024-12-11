function blinkStones(input, blinks) {
    // Parse the input into a map to track the count of each stone number
    let stonesCount = new Map();
    input.trim().split(/\s+/).forEach(stone => {
        let value = BigInt(stone);
        stonesCount.set(value, (stonesCount.get(value) || 0) + 1);
    });

    // Simulate the blinking process for the specified number of blinks
    for (let i = 0; i < blinks; i++) {
        let nextStonesCount = new Map();

        for (let [stone, count] of stonesCount) {
            if (stone === 0n) {
                // Rule 1: 0 becomes 1
                nextStonesCount.set(1n, (nextStonesCount.get(1n) || 0) + count);
            } else {
                let str = stone.toString();
                if (str.length % 2 === 0) {
                    // Rule 2: Even number of digits, split the stone
                    let mid = str.length / 2;
                    let left = BigInt(str.slice(0, mid));
                    let right = BigInt(str.slice(mid));
                    nextStonesCount.set(left, (nextStonesCount.get(left) || 0) + count);
                    nextStonesCount.set(right, (nextStonesCount.get(right) || 0) + count);
                } else {
                    // Rule 3: Multiply by 2024
                    let newStone = stone * 2024n;
                    nextStonesCount.set(newStone, (nextStonesCount.get(newStone) || 0) + count);
                }
            }
        }

        // Update the stone counts for the next iteration
        stonesCount = nextStonesCount;
    }

    // Return the total number of stones after all blinks
    let totalStones = 0;
    for (let count of stonesCount.values()) {
        totalStones += count;
    }
    return totalStones;
}

const input = `2701 64945 0 9959979 93 781524 620 1`;
const result = blinkStones(input, 75);
console.log(result);

