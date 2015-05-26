(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var MovingObject = Asteroids.MovingObject = function(attributes) {
    this.pos = attributes.pos;
    this.vel = attributes.vel;
    this.radius = attributes.radius;
    this.color = attributes.color;
    this.game = attributes.game;
  };

  MovingObject.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
      this.pos[0],
      this.pos[1],
      this.radius,
      0,
      2 * Math.PI,
      false
    );

    ctx.fill();
  };

  MovingObject.prototype.move = function() {
    this.pos[0] = this.pos[0] + this.vel[0];
    this.pos[1] = this.pos[1] + this.vel[1];
    this.pos = this.game.wrap(this.pos);
  };

  MovingObject.prototype.isCollidedWith = function(otherObject) {
    var ex = (this.pos[0] - otherObject.pos[0]);
    var why = (this.pos[1] - otherObject.pos[1]);
    var distance = Math.pow((ex*ex + why*why), 0.5);
    if (distance <= this.radius + otherObject.radius) {
      return true;
    } else {
      return false;
    }
  };

  MovingObject.prototype.collideWith = function(otherObject) {
    this.game.remove(otherObject);
    this.game.remove(this);
  };

})();
