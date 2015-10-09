$(function() {

  //Object Constructor
  function Figure (name, health, minAtk, maxAtk) {
    this.name = name;
    this.health = health;
    this.damage = function(enemyName){
      var dmg = Math.floor(Math.random() * (maxAtk - minAtk)) + minAtk;
      enemyName.health -= dmg;
      return enemyName.health;
    }
  }

  var gary = new Figure('Gary', 100, 3, 10);
  var enemy = new Figure('Darius', 200, 4, 20);


});