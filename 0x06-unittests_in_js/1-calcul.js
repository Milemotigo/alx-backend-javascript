function calculateNumber(type, a, b) {
    const numa = Math.round(a);
    const numb = Math.round(b);
    if (type === 'SUM') {
        return(numa + numb);
    }

    if (type === 'SUBTRACT') {
        return(numa - numb);
    }

    if (type === 'DIVIDE') {
        if(numa > numb) {
            return('Error');
        }
        return(numa / numb);
    }
}
module.exports = calculateNumber;
