function calculateNumber(a, b) {
    const rNum1 = Math.round(a);
    const rNum2 = Math.round(b);
    const sum = rNum1 + rNum2
    console.log(sum)
    return Math.round(sum)
}
module.exports = calculateNumber;