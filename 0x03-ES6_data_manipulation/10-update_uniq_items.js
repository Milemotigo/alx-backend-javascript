function groceriesList() {
    const groceriesMap = new Map();
    groceriesMap.set("Apples", 10);
    groceriesMap.set("Tomatoes", 10);
    groceriesMap.set("Pasta", 1);
    groceriesMap.set("Rice", 1);
    groceriesMap.set("Banana", 5);

    return groceriesMap;
}

export default function updateUniqueItems(mappedItems) {
    if (!(mappedItems instanceof Map)) {
        throw new Error("Cannot process")
    }
    for (const [key, value] of mappedItems){
        if (value === 1) {
            mappedItems.set(key, 100);
        }
    }
}

const map = groceriesList();
console.log(map);

updateUniqueItems(map)
console.log(map);