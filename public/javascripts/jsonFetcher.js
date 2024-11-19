class JsonFetcher {
    constructor() {
      this.isLoading = false; // Indicator for loading state
      this.gameData = null; // Store fetched game data
    }
  
    async fetchGameJson() {
      this.isLoading = true; // Set loading state to true
      try {
        const response = await fetch('http://localhost:9000/json'); // Adjust the URL as necessary
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        this.gameData = await response.json(); // Store the fetched data
        //console.log("jsonFetcher: " + this.gameData); // Use the fetched data here
      } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
      } finally {
        this.isLoading = false; // Reset loading state
      }
    }
}
// for some magical reason parantheses are needed here...
const jsonFetcher = new JsonFetcher();

(async () => {
    await jsonFetcher.fetchGameJson();
})();

export default jsonFetcher;