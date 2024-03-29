export default function cleanSet(set, startString) {
    let startStringArray = [];

    for (const Item of set) {
        if (Item.startsWith(startString)) {
            const sub_string = Item.substring(startString.length);
            startStringArray.push(sub_string);
        }
    }
    return startStringArray.join("-");
}