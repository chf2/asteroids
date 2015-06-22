(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Bullet = Asteroids.Bullet = function(attrs) {
    this.RADIUS = 4;
    this.COLOR = "green";
    var attributes = { pos: attrs.pos,
                       vel: attrs.vel,
                       game: attrs.game,
                       radius: this.RADIUS,
                       color: this.COLOR };
    Asteroids.MovingObject.call(this, attributes);
  }

  Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);

  Bullet.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Asteroids.Asteroid) {
      this.game.removeObject(otherObject);
      this.game.removeObject(this);
    }
  };

  Bullet.prototype.isWrappable = function () {
    return false;
  }
})();