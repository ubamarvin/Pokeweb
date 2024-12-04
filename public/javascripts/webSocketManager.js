//webSocketManager.js
//Purpose: Share single Instance of WebSocketManager Class across multiple modules class
//Achieved by: Singleton Pattern
import {updateGui} from "./gui.js";

class WebSocketManager {
    constructor() {
        if (!WebSocketManager.instance) {
            const wsUrl = process.env.WS_URL || "ws://localhost:9000/socket";
            this.socket = new WebSocket(wsUrl);
            this.init();
            this.handleMessage
            WebSocketManager.instance = this;
        }
        return WebSocketManager.instance;
    }

    init() {
        this.socket.addEventListener("open", () => {
            console.log("WS connected");

        });

        this.socket.addEventListener("message", (e) => {
            let data = JSON.parse(e.data);
            console.log("data received");
            updateGui(data);

        })
      
        

        this.socket.addEventListener("error", (e) => {
            console.error("WebSocket error:", e);
        });

        this.socket.addEventListener("close", () =>{
            console.log("WebSocket connection closed")
        });
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



