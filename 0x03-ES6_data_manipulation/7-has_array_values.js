export default function  hasValuesFromArray(arg1, arg2) {
    for (const arg of arg2) {
        if (!arg1.has(arg)) {
            return false;
        }
    }
    return true;
}