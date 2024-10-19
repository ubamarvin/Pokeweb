// main
import { fakeServer } from "./fakeServer.js";
export const createDeadLayout = () => {
    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container');
    const btn = document.createElement("button");
    btn.textContent="play again because you died"
    btn.addEventListener("click", () =>{
        fakeServer.receiveString("pick")
    }
    );
    guiContainer.appendChild(btn);

    //....

    return guiContainer;

};
            