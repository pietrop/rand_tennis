function Player(sex) {
	this.score = 0;
	this.games = 0;
	this.sets = 0;
  this.gender = sex; 
  this.match = 0;
  this.tiebreak = 0;
}

Player.prototype.addScore = function()  {
	this.score += 1;
};

Player.prototype.addGame = function() {
	this.games += 1;
}

Player.prototype.addSet = function() {
	this.sets += 1;
}

Player.prototype.addMatch = function() {
  this.match += 1;
}

Player.prototype.addTiebreak = function(){
  this.tiebreak += 1;
}

