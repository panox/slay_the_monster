$(function() {

  //Object Constructor
  function Figure (name, health, minAtk, maxAtk) {
    this.name = name;
    this.health = health;
    this.damage = function(enemyName){
      var dmg = Math.floor(Math.random() * (maxAtk - minAtk)) + minAtk;
      enemyName.health -= dmg;
      console.log(dmg);
      console.log(enemyName.health);
    }
  }

  var gary = new Figure('Gary', 100, 3, 10);
  gary.healing = function(){
    var heal = Math.floor(Math.random() * (20 - 4)) + 4;
    //check for health up to 100
    if (gary.health += heal > 100) {
      gary.health = 100;
    } else {
      gary.health += heal;
    }
    console.log(gary.health + ":"+ heal);
  }
  var darius = new Figure('Darius', 200, 4, 20);

  debugger
});