class Player
  def play_turn(warrior)
     
    if warrior.feel.empty
      warrior.walk! 
    else
       warrior.attack!
    end
  # cool code goes here

  
end