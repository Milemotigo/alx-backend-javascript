export const weakMap = new WeakMap()

export default function queryAPI(endpoint) {
    let numOfQueries = weakMap.get(endpoint) || 0;
    
    numOfQueries++;
    if(numOfQueries >= 5){
        throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, numOfQueries);
}