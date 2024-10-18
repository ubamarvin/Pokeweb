// pick
import { fakeServer } from "./fakeServer.js";
export const createPickLayout = () => {
    const guiContainer = document.createElement("div");
    guiContainer.classList.add('gui-container');
    const btn = document.createElement("button");
    btn.textContent="play"
    btn.addEventListener("click", () =>{
        fakeServer.receiveString("main")
    }
    );
    guiContainer.appendChild(btn);

    //....

    return guiContainer;

};
