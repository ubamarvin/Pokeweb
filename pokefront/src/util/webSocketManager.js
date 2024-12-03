//webSocketManager.js
//Purpose: Share single Instance of WebSocketManager Class across multiple modules class
//Achieved by: Singleton Pattern
//import {updateGui} from "./gui.js";

class WebSocketManager {
    constructor() {
        if (!WebSocketManager.instance) {
            this.socket = new WebSocket("ws://localhost:9000/socket");
            this.init();
            this.handleMessage
            this.eventBuffer = [];
            this.listener = null // TopGui Comp listens for changes
            WebSocketManager.instance = this;
        }
        return WebSocketManager.instance;
    }

    init() {
        this.socket.addEventListener("open", () => {
            console.log("WS connected");

        });
        //Producer
        this.socket.addEventListener("message", (e) => {
            let data = JSON.parse(e.data);
            this.data = data;
            if (this.listener) {
                this.listener(data);
                console.log("listener notified");
            } else {
                this.eventBuffer.push(data);
            }
        })
        
        
      
        

        this.socket.addEventListener("error", (e) => {
            console.error("WebSocket error:", e);
        });

        this.socket.addEventListener("close", () =>{
            console.log("WebSocket connection closed")
        });
    }
        //Consumer
        setListener(callback){
            this.listener = callback;

            if (this.eventBuffer.length > 0) {
                this.eventBuffer.forEach((data) => {
                    this.listener(data);
                });
                this.eventBuffer = [];
            }
        }

        removeListener() {
            this.listener = null;
        }

        //Client to Server
        sendMessage(json) {
            if (this.socket.readyState !== WebSocket.OPEN) {
                console.error("WS not open. Cant send");
                return;
            }
            this.socket.send(json);
        }
}
// for some magical reason parantheses are needed here...
const webSocketManager = new WebSocketManager();
export default webSocketManager;


