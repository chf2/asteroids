(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  GameView = Asteroids.GameView = function(game, ctx) {
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
    key('a', function() { alert('you pressed a!') });
    key('a', function() { this.game.ship.power('left'); });
    key('w', function() { this.game.ship.power('up'); });
    key('d', function() { this.game.ship.power('right'); });
    key('s', function() { this.game.ship.power('down'); });
  };

})();
