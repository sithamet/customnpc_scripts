var SCOREBOARD; 

function interact(e) {

    SCOREBOARD = e.npc.world.getScoreboard();

    var players = SCOREBOARD.getPlayerList(); 
    var objectives = SCOREBOARD.getObjectives(); 
    
    e.npc.say("&eLogging players"); 
    for (var p in players) {
       e.npc.say(p); 
   }
   
       e.npc.say("&eLogging objectives"); 
    for (var p in objectives) {
    
    e.npc.say(p.typeOf + " of size:" + objectives.length); 
    e.npc.say(p.getName() + " display " + p.getCriteria()); 
 
      for (var s in p.getScores) {
      e.npc.say(s.getPlayerName() + " " + s.getValue()); 
      }
   }


}