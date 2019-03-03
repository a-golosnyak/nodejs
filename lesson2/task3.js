class Warior{
    constructor (name, HP){
    this.name = name;
    this.HP = HP;
  }
  
  get Attack(){
    return this.randomInteger(0, 10);
  } 
  
  randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  }
}

class Gladiator extends Warior{
    constructor(name, HP){
    super(name, HP);
  }
}

class Monster extends Warior{
    constructor(name, HP){
    super(name, HP);
  }
}
  

class Game{
    constructor (unit1, unit2){
    this.unit1 = unit1;
    this.unit2 = unit2;
    this.winner = '';
  }
  
  start(){
    while(1)
    {
        this.unit2.HP = this.unit2.HP-this.unit1.Attack;
      
      if(this.unit2.HP < 0){
        this.winner = this.unit1.name;
        break;
      }
      
        this.unit1.HP = this.unit1.HP-this.unit2.Attack;
      
      if(this.unit1.HP < 0){
        this.winner = this.unit2.name;
        break;
      }
    }
  }
}


const gladiator = new Gladiator("Karl", 100);
const monster = new Monster('Drago', 100);
const game = new Game(gladiator, monster);

game.start();
console.log(game.winner); // имя победителя.














