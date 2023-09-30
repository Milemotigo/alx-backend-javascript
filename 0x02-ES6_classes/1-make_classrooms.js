import ClassRoom from "./0-classroom";

const arr = [];
export default function initializeRooms() {
    let room1 = new ClassRoom(19);
    arr.push(room1);
    let room2 = new ClassRoom(20);
    arr.push(room2);
    let room3 = new ClassRoom(34);
    arr.push(room3);
    return arr;
}
console.log(initializeRooms());