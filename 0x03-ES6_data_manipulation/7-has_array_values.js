export default function  hasValuesFromArray(arg1, arg2) {
    for (const arg of arg2) {
        if (!arg1.has(arg)) {
            return false;
        }
    }
    return true;
}
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [10]));
console.log(hasValuesFromArray(new Set([1, 2, 3, 4, 5]), [1, 10]));