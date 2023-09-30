// 5-building.js
export default class Building {
    constructor(sqft) {
      this._sqft = sqft;
    }
  
    get sqft() {
      return this._sqft;
    }
  
    // Abstract method that must be overridden by subclasses
    evacuationWarningMessage() {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }
  
// const b = new Building(100);
// console.log(b);

// class TestBuilding extends Building {}

// try {
//     new TestBuilding(200)
// }
// catch(err) {
//     console.log(err);
// }