// main

const createChoiceBox = () => {
    const choiceBox = document.createElement("div");

    const roundMsg = document.createElement("div");
    roundMsg.classList.add("round-msg");
    roundMsg.textContent = "What Will you do";

    const choiceButtons = document.createElement("div");
    choiceButtons.classList.add("choice-buttons");

    const attackBtn = document.createElement("div");
    attackBtn.classList.add("attack-btn");
    attackBtn.textContent = "Attack";

    const itemsBtn = document.createElement("div");
    itemsBtn.textContent = "Items";

    const switchBtn = document.createElement("div");
    switchBtn.textContent = "Switch";

    const runBtn = document.createElement("div");
    runBtn.textContent = "Run";

    // Append buttons to the choiceButtons container
    choiceButtons.appendChild(attackBtn);
    choiceButtons.appendChild(itemsBtn);
    choiceButtons.appendChild(switchBtn);
    choiceButtons.appendChild(runBtn);

    // Append roundMsg and choiceButtons to the choiceBox
    choiceBox.appendChild(roundMsg);
    choiceBox.appendChild(choiceButtons);

    return choiceBox;
};

// Export the function
export const createChoiceBoxHtml = createChoiceBox;
