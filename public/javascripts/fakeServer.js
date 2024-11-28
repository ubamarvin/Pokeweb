class FakeServer {
    constructor() {
        this.state = ''; // Initialize state with an empty string
        this.updateDelay = 1000; // Update delay in milliseconds
        this.isUpdating = false; // Flag to indicate if an update is in progress
    }

    async receiveString(inputString) {
        // Check if an update is already in progress
        if (this.isUpdating) return;

        this.isUpdating = true; // Set the flag to indicate an update is in progress
        
        console.log("FakeServer: Updating state...");
        
        // Simulate network latency
        await new Promise(resolve => setTimeout(resolve, this.updateDelay));
        
        // Update the state with the new string
        this.state = inputString;
        console.log("FakeServer: State updated to:", this.state);
        
        this.isUpdating = false; // Reset the flag after updating
    }

    getState() {
        return this.state; // Method to get the current state
    }
}

// Export an instance of the FakeServer
export const fakeServer = new FakeServer();
