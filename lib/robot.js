const dir = ['north', 'south', 'east', 'west'];

class Robot {
	//your solution here

  constructor(coordinates = [0,0], bearing = 'north'){
    this.coordinates = coordinates;
    this.bearing = bearing;
  }
  setCoordinates(x, y) {
    this.coordinates[0] = x;
    this.coordinates[1] = y;
  }
  setBearing(direction){
      if (dir.includes(direction)){
        this.bearing = direction;
        return this.bearing;
      }
      else {
        throw "Invalid Robot Bearing";
      }
  }
  place(obj){
    this.coordinates[0] = obj.x
    this.coordinates[1] = obj.y
    this.bearing = obj.direction
  }

  turnRight(){
    const orientation = this.bearing

    switch (orientation){
      case 'north':
        return this.bearing = 'east';
        break;

      case 'east':
        return this.bearing = 'south';
        break;

      case 'south':
        return this.bearing = 'west';
        break;

      case 'west':
        return this.bearing = 'north';
        break;
      default:
       return 'winning';
       break;

    }

  }

  turnLeft(){
    const orientation = this.bearing

    switch (orientation){
      case 'north':
        return this.bearing = 'west';
        break;

      case 'east':
        return this.bearing = 'north';
        break;

      case 'south':
        return this.bearing = 'east';
        break;

      case 'west':
        return this.bearing = 'south';
        break;
      default:
       return 'winning';
       break;
    }
  }

  advance(){
    const orientation = this.bearing

    switch (orientation){
      case 'north':
        return this.coordinates[1] += 1 ;
        break;

      case 'east':
        return this.coordinates[0] += 1;
        break;

      case 'south':
        return this.coordinates[1] -= 1;
        break;

      case 'west':
        return this.coordinates[0] -= 1;
        break;
      default:
       return 'winning';
       break;
    }
  }

  translateInstructions(letter){
    for(const character of letter ){
      console.log(character)
      if (character.toUpperCase() === 'L'){
        this.turnLeft();
      }
      else if (character.toUpperCase() === 'R'){
        this.turnRight();
      }
      else if (character.toUpperCase() === 'A'){
        this.advance();
      }
      else{
        return 'Not a valid!'
      }
    }

  }
}
