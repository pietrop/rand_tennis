require 'sinatra'
require './rand_tennis'
require 'json'

get '/tennis' do
	erb :tennis
end

 post '/shoot' do 
 content_type :json

  player1 = Player.new('Alex')
  player2 = Player.new('Pietro')
  game = Game.new(player1, player2)

  player1.picks(params[:shot].to_sym) and player2.picks(:backhand)
  				#forehand
	if winner = game.winner  #!checking if it's nil, and also giving assignment
	  { winner: winner.name }.to_json
	else
	  'DRAW!'
	end
 end 

 

# get '/home' do

# end