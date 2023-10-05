export const weakMap = new WeakMap()

export function queryAPI(endpoint) {
    const numOfQueries = weakMap.get(endpoint) || 0;
    if(numOfQueries >= 5){
        throw new Error('Endpoint load is high');
    }
    weakMap.set(endpoint, numOfQueries + 1);
}
