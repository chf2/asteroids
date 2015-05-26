(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  Ship = Asteroids.Ship = function (position, currentGame) {
    this.COLOR = "blue";
    this.RADIUS = 8;
    var attributes = { pos: position,
                       vel: [0, 0],
                       game: currentGame,
                       radius: this.RADIUS,
                       color: this.COLOR };
    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Util.inherits(Ship, Asteroids.MovingObject);

  Ship.prototype.fireBullet = function () {
    var bulletVel = [this.vel[0] * 2, this.vel[1] * 2];
    var bulletPos = [this.pos[0], this.pos[1]];
    var attributes = { pos: bulletPos,
                       vel: bulletVel, 
                       game: this.game };
    this.game.addObject(new Asteroids.Bullet(attributes));
  }

  Ship.prototype.relocate = function () {
    this.pos = this.game.randomPosition();
    this.vel = [0, 0];
  };

  Ship.prototype.power = function(impulse) {
    switch (impulse) {
    case 'left':
      this.vel[0] -= 2;
      break;
    case 'right':
      this.vel[0] += 2;
      break;
    case 'up':
      this.vel[1] -= 2;
      break;
    case 'down':
      this.vel[1] += 2;
      break;
    default:
    }
  };

})();
