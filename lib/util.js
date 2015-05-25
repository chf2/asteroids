(function() {
  if (window.Asteroids === undefined) {
    window.Asteroids = {};
  }

  Asteroids.Util = {};

  Asteroids.Util.inherits = function(ChildClass, ParentClass) {
    function Surrogate () {}
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
  };

  Asteroids.Util.randomVec = function(length) {
    var velX = Math.floor(length * (Math.random() * 2 - 1));
    var velY = Math.floor(length * (Math.random() * 2 - 1));
    return [velX, velY];
  };
})();
