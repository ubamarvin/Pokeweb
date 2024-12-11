### General Todos
# Back
- add multiplayer

# Front
- add deadState
- add roundMsg
- add loading screen
- add Tui
- styleHome


### Websockets
-upd gui is double called 
-> closed

-attacks switch and whatever are not accepted via json
p-> fileIojson 441 , convert also attack choice,
    -> game 214 call choice in controller
    -> fileToJson doesnt work as it should
    moves are not converted
    -> jsonToAttackChoice, and jsonToSwitchChoice
    looked up for non existent entry
    -> mAybe setCurrentMove too?
    -> solved, but ausbaufägif
    -> same for opponent!
    


-add Events to Controller inorder to make websocket in Server controller reactable
-> made controller an Observer
-> added Controller to ObserverList
->Closed as of now

-fix page reload issue. When reloading the page data that is dependent on websocket is lost. fix most likely in WebSocketManager Class itself;
->Switch to SPA arch
->delayed til vue

-finish Json manipulator class

### Websockets Bonus
-add a test

Tui: Server to client
main -> choice -> attack . move
att  -> choice -> attack . move
be   -> choice -> attack . updMove

Gui: Server to client
main _> choice empty
att -> choice empty
be  -> choice empty

Gui: Client to Server
be -> choice correctly populated



####
https://www.youtube.com/watch?v=JR1OjCoWzEs


####
team x is using UML Diagramms. theyre saying it helps them think better, reduces work time and makes teamwork easier.




