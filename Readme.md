### Websockets
-upd gui is double called -> fixxed
-attacks switch and whatever are not accepted via json
    -> fileIojson 441 , convert also attack choice,
    -> game 214 call choice in controller
-add Events to Controller inorder to make websocket in Server controller reactable
-fix page reload issue. When reloading the page data that is dependent on websocket is lost. fix most likely in WebSocketManager Class itself;
-finish Json manipulator class

### Websockets Bonus
-add a test
