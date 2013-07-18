// need to call each function to update the number
// maybe easier to have a display score function?

function Game(p1, p2, p3, p4) {
	this.player1 = p1;
	this.player2 = p2;
	this.player3 = p3;
	this.player4 = p4;
	FORMAT = ["0", "15", "30", "40", "ADV"];
	SINGLESERVERS = [this.player1, this.player2];

	this.server = function(){
		return SINGLESERVERS[this.initialServer];
	}

	this.notServer = function(){
		if(this.initialServer===0)
		return SINGLESERVERS[this.initialServer + 1];
		else if(this.initialServer === 1)
			return SINGLESERVERS[this.initialServer - 1];

	}

	this.changeSingleServer = function(){
		var lastServer = SINGLESERVERS.shift()
		SINGLESERVERS.push(lastServer);
	}

	this.winPoint = function(player){


		if(this.player1.games === 6 && this.player2.games === 6)
		{
			player.addTiebreak();			
		}
		else
		{

			if(player === this.player3)
				{player1.addScore();}
			else if(player === this.player4)
				{player2.addScore();}
			else
			{player.addScore();}

			if ((this.player1.score === this.player2.score) && this.player1.score >=3)
				{
				this.player1.score=3;
				this.player2.score=3;
				}


			if(player == this.player3 && ((this.player1.score >= 4 && this.player1.score-this.player2.score >= 2) || (this.player2.score >= 4 && this.player2.score - this.player1.score >= 2)))
				{
				this.player1.score = 0;
				this.player2.score = 0;
				this.player1.addGame();
				}
			else if(player == this.player4 && ((this.player1.score >= 4 && this.player1.score-this.player2.score >= 2) || (this.player2.score >= 4 && this.player2.score - this.player1.score >= 2))) 
				{
				this.player1.score = 0;
				this.player2.score = 0;
				this.player2.addGame();
				}

			else if((this.player1.score >= 4 && this.player1.score-this.player2.score >= 2) || (this.player2.score >= 4 && this.player2.score - this.player1.score >= 2)) 
				{  
				this.player1.score = 0;
				this.player2.score = 0;
				player.addGame();
				this.changeSingleServer();
				}



			}	//end of else


			return this.pointsConversion();
		}



	this.pointsConversion = function(){
		return FORMAT[this.player1.score] + "-" + FORMAT[this.player2.score];
	}

	this.games = function(){
		return this.player1.games + "-" + this.player2.games;
	}

	this.sets = function(){
		if((this.player1.games === 6 && this.player2.games === 6) && this.player1.tiebreak >= 7 && (this.player1.tiebreak - this.player2.tiebreak >= 2))
			{
			this.player1.sets +=1;
			this.player1.games = 0;
			this.player2.games = 0;
			this.player1.tiebreak = 0;
			this.player2.tiebreak = 0;
		
			}	

		if((this.player2.games === 6 && this.player1.games === 6) && this.player2.tiebreak >= 7 && (this.player2.tiebreak - this.player1.tiebreak >= 2))
			{
			this.player2.sets +=1;
			this.player1.games = 0;
			this.player2.games = 0;
			this.player1.tiebreak = 0;
			this.player2.tiebreak = 0;
			
			}		

		if(this.player2.games >= 6 && (this.player2.games - this.player1.games) >=2 )
			{
			this.player2.sets +=1;
			this.player1.games = 0;
			this.player2.games = 0;
			}	

		if(this.player1.games >= 6 && (this.player1.games - this.player2.games) >=2 )
			{
			this.player1.sets +=1;
			this.player1.games = 0;
			this.player2.games = 0;
			}	

		// if((this.player1.games >= 6 && this.player1.games-this.player2.games >=2)
		// 	{
		// 	this.player1.sets +=1;
		// 	this.player1.games = 0;
		// 	this.player2.games = 0;
		// 	}	


	

		return this.player1.sets + "-" + this.player2.sets;
	}

	this.match = function(){
		if(this.player1.gender === "female" && this.player1.sets === 2)
			{this.player1.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player2.gender === "female" && this.player2.sets === 2)
			{this.player2.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player1.gender === "male" && this.player1.sets === 3)
			{this.player1.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		if(this.player2.gender === "male" && this.player2.sets === 3)
			{this.player2.match +=1; 
			this.player1.sets = 0;
			this.player2.sets = 0;
		}

		return this.player1.match + "-" + this.player2.match;
	}

	this.tiebreak = function(){
		return this.player1.tiebreak + "-" + this.player2.tiebreak;

	}


	this.isGamePointP1 = function(){
		if(this.player1.score >= 3 && (this.player1.score - this.player2.score) >=2)
			{return true;}
	


	
	}

	this.isGamePointP2= function(){
			if(this.player2.score >= 3 && (this.player2.score - this.player1.score) >=2)
			{return true;}
	}

	this.specialPoints = function(){
		if(this.matchPoint())
			{return this.matchPoint();}
		else if(this.setPoint())
			{return this.setPoint();}
		else if(this.isBreakPoint())
			{return "Break Point";}
		else
			{return "";}
	}

	this.setPoint = function(){
		if(this.player1.games >= 5 && (this.player1.games - this.player2.games >=1) && this.isGamePointP1())
			{return "Set Point";}
		else if (this.player1.games === 6 && this.player2.games === 6 && this.player1.tiebreak>=6 && this.player1.tiebreak-this.player2.tiebreak >= 1)
			{return "Set Point";}

		if(this.player2.games >= 5 && (this.player2.games - this.player1.games >=1) && this.isGamePointP2())
			{return "Set Point";}

		else if (this.player2.games === 6 && this.player1.games === 6 && this.player2.tiebreak>=6 && this.player2.tiebreak-this.player1.tiebreak >= 1)
			{return "Set Point";}
		
	} 



	this.isBreakPoint = function(){
	var server = this.server();
	var notserver = this.notServer();
	if(this.isGamePoint() && server.score < notserver.score)
		{return true;}
	else
		{return false;}
}

	this.matchPoint = function(){
		if(this.player1.sets === 1 && this.setPoint() && this.player1.gender ==="female")
			{return "Match Point";}
	else if(this.player2.sets === 1 && this.setPoint() && this.player2.gender ==="female")
			{return "Match Point";}
	

	if(this.player1.sets === 2 && this.setPoint() && this.player1.gender ==="male")
			{return "Match Point";}
	else if(this.player2.sets === 2 && this.setPoint() && this.player2.gender ==="male")
			{return "Match Point";}
	}



}






