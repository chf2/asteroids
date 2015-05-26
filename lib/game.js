(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var Game = Asteroids.Game = function() {
    this.asteroids = [];
    this.bullets = [];
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.addAsteroids();
    this.ship = new Asteroids.Ship(this.randomPosition(), this);
  };

  Game.prototype.addAsteroids = function() {
    for (var i = 0; i < this.NUM_ASTEROIDS; i++) {
      var posX = Math.floor(this.DIM_X * Math.random());
      var posY = Math.floor(this.DIM_Y * Math.random());
      this.asteroids.push(new Asteroids.Asteroid([posX, posY], this));
    }
  };

  Game.prototype.addObject = function(obj) {
    if (obj instanceof Asteroids.Asteroid) {
      this.asteroids.push(obj);
    } else if (obj instanceof Asteroids.Bullet) {
      this.bullets.push(obj);
    }
  };

  Game.prototype.allObjects = function () {
    return this.bullets.concat(this.asteroids).concat([this.ship]);
  };

  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.allObjects().forEach( function(el) {
      el.draw(ctx);
    });
  };

  Game.prototype.isOutOfBounds = function(pos) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] > this.DIM_X || pos[1] > this.DIM_Y) {
      return true;
    } else {
      return false;
    }
  }

  Game.prototype.moveObjects = function() {
    this.allObjects().forEach( function(el) {
      el.move();
    });
  };

  Game.prototype.wrap = function(pos) {
    var newPos = pos;
    if (pos[0] <= 0) {
      newPos[0] = this.DIM_X + pos[0];
    } else if (pos[0] > this.DIM_X) {
      newPos[0] = pos[0] - this.DIM_X;
    }
    if (pos[1] <= 0) {
      newPos[1] = this.DIM_Y + pos[1];
    } else if (pos[1] > this.DIM_Y) {
      newPos[1] = pos[1] - this.DIM_Y;
    }

    return newPos;
  };

  Game.prototype.checkCollisions = function() {
    for (var i = 0; i <  this.allObjects().length; i++) {
      for (var j = i + 1; j < this.allObjects().length; j++) {
        if (this.allObjects()[i].isCollidedWith(this.allObjects()[j])) {
          this.allObjects()[i].collideWith(this.allObjects()[j]);
        }
      }
    }
  };

  Game.prototype.randomPosition = function () {
    var posX = 0.8 * this.DIM_X * Math.random();
    var posY = 0.8 * this.DIM_Y * Math.random();
    return [posX, posY];
  };

  Game.prototype.removeObject = function(obj) {
    var idx = -1;
    var obj_array = null;
    if (obj instanceof Asteroids.Asteroid) {
      idx = this.asteroids.indexOf(obj);
      obj_array = this.asteroids;
    } else if (obj instanceof Asteroids.Bullet) {
      idx = this.bullets.indexOf(obj);
      obj_array = this.bullets;
    }
    if (idx > -1) {
      obj_array.splice(idx, 1);
    }
  };


  Game.prototype.step = function() {
    this.moveObjects();
    this.checkCollisions();
  };

})();
