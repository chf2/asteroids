(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }
  var Asteroid = Asteroids.Asteroid = function(position, currentGame) {
    this.COLOR = "#CCCCCC";
    this.RADIUS = 10;
    var attributes = { pos: position,
                       game: currentGame,
                       color: this.COLOR,
                       radius: this.RADIUS,
                       vel: Asteroids.Util.randomVec(2 * this.RADIUS) };
    Asteroids.MovingObject.call(this, attributes);
  };

  Asteroids.Util.inherits(Asteroid, Asteroids.MovingObject);

  Asteroid.prototype.collideWith = function(otherObject) {
    if (otherObject instanceof Ship) {
      otherObject.relocate();
    } else if (otherObject instanceof Bullet) {
      console.log("BULLLET COLLISION");
      otherObject.collideWith(this);
    }
  };

})();
