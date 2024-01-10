function countNotes(amount) {
    const denominations = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    const notesCount = {};

    for (const denomination of denominations) {
        const count = Math.floor(amount / denomination);

        if (count > 0) {
            notesCount[denomination] = count;
            amount %= denomination;
        }
    }

    return notesCount;
}

const amount = 2456; // Replace this with the desired amount
const notesResult = countNotes(amount);

console.log("Amount:", amount);
console.log("Notes Count:", notesResult);
