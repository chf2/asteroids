(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  Ship = Asteroids.Ship = function (position, currentGame) {
    this.COLOR = "blue";
    this.RADIUS = 8;
    attributes = { pos: position,
                   vel: [0, 0],
                   game: currentGame,
                   radius: this.RADIUS,
                   color: this.COLOR };
    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    switch (impulse) {
    case 'left':
      this.vel[0] -= 10;
      break;
    case 'right':
      this.vel[0] += 10;
      break;
    case 'up':
      this.vel[1] -= 10;
      break;
    case 'down':
      this.vel[1] += 10;
      break;
    default:
      this.vel[1] += 10;
    }
  };

})();
