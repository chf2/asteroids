(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  var GameView = Asteroids.GameView = function(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  };

  GameView.prototype.start = function() {
    this.bindKeyHandlers();
    setInterval(function() {
      this.game.step();
      this.game.draw(this.ctx);
    }.bind(this), 20);
  };

  GameView.prototype.bindKeyHandlers = function () {
    var ship = this.game.ship;
    key('left', function() { ship.power('left'); });
    key('up', function() { ship.power('up'); });
    key('right', function() { ship.power('right'); });
    key('down', function() { ship.power('down'); });
    key('space', function() { ship.fireBullet(); });
  };

})();
