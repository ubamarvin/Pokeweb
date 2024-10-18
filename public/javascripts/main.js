
const createMainLayout = () => {
    // Create main container for poke-layer and info-layer
    const choiceBox = document.createElement("div");

    // Poke-layer
    const pokeLayer = document.createElement("div");
    pokeLayer.classList.add("poke-layer");

    // Top row - opponent Pokémon
    const topRow = document.createElement("div");
    topRow.classList.add("top-row");

    const opImageBox = document.createElement("div");
    opImageBox.classList.add("op-image-box");

    const opPkImg = document.createElement("img");
    opPkImg.classList.add("pk-sprite");
    opPkImg.id = "op-pk";
    opPkImg.src = "https://img.pokemondb.net/sprites/silver/normal/weezing.png";
    opPkImg.alt = "Weezing";

    opImageBox.appendChild(opPkImg);
    topRow.appendChild(opImageBox);

    // Bottom row - player Pokémon
    const botRow = document.createElement("div");
    botRow.classList.add("bot-row");

    const plImageBox = document.createElement("div");
    plImageBox.classList.add("pl-image-box");

    const plPkImg = document.createElement("img");
    plPkImg.classList.add("pk-sprite");
    plPkImg.id = "pl-pk";
    plPkImg.src = "https://img.pokemondb.net/sprites/silver/normal/weezing.png";
    plPkImg.alt = "Weezing";

    plImageBox.appendChild(plPkImg);
    botRow.appendChild(plImageBox);

    // Append both rows to pokeLayer
    pokeLayer.appendChild(topRow);
    pokeLayer.appendChild(botRow);

    // Info-layer
    const infoLayer = document.createElement("div");
    infoLayer.classList.add("info-layer");

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

    // Append buttons to choiceButtons container
    choiceButtons.appendChild(attackBtn);
    choiceButtons.appendChild(itemsBtn);
    choiceButtons.appendChild(switchBtn);
    choiceButtons.appendChild(runBtn);

    // Append roundMsg and choiceButtons to infoLayer
    infoLayer.appendChild(roundMsg);
    infoLayer.appendChild(choiceButtons);

    // Append pokeLayer and infoLayer to choiceBox (the main container)
    choiceBox.appendChild(pokeLayer);
    choiceBox.appendChild(infoLayer);

    return choiceBox;
};

// Export the function
export const createMainLayoutHtml = createMainLayout;
