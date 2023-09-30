import Building from "./5-building";

export default class SkyHighBuilding {
    constructor(sqft, floors) {
        this._sqft = sqft;
        this._floors = floors;
    }

    get sqft(){
        return this._sqft;
    }
    set sqft(newSqft) {
        this._sqft = newSqft;
    }

    get floors(){
        return this._floors;
    }
    set floors(newFloor) {
        this._floors = newFloor;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors.`;
    }
}
// const building = new SkyHighBuilding(140, 60);
// console.log(building.sqft);
// console.log(building.floors);
// console.log(building.evacuationWarningMessage());