//webSocketManager.js
//Purpose: Share single Instance of WebSocketManager Class across multiple modules class
//Achieved by: Singleton Pattern

class WebSocketManager {
    handleMessage;
    constructor() {
        if (!WebSocketManager.instance) {
            this.socket = new WebSocket("ws://localhost:9000/socket");
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
        // is called upon init. Server sends json upon connection
        this.socket.addEventListener("message", (e) => {
            const data = JSON.parse(e.data);
            console.log("Receive data", data);
            if(this.handleMessage) {
                this.handleMessage(data);
            }

        });

        this.socket.addEventListener("error", (e) => {
            console.error("WebSocket error:", e);
        });

        this.socket.addEventListener("close", () =>{
            console.log("WebSocket connection closed")
        });
    }
        //Server to Client 
        setHandleMessage(func){
            handleMessage = func()
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



