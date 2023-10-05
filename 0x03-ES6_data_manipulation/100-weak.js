// Create a WeakMap to store the number of times each endpoint is queried
export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(endpoint, count + 1);
}



// export const weakMap = new WeakMap()

// export function queryAPI(endpoint) {
//     const numOfQueries = weakMap.get(endpoint) || 0;
//     if(numOfQueries >= 5){
//         throw new Error('Endpoint load is high');
//     }
//     weakMap.set(endpoint, numOfQueries + 1);
// }


