//jsonSender.js

import jsonFetcher  from "./jsonFetcher.js"

// Load the games json file
(async () => {
    await jsonFetcher.fetchGameJson();
    // 
    let data = jsonFetcher.gameData
    if (!data) {
      console.error("JsonSender: Failed to fetch game data")
    }
    console.log(jsonFetcher.isLoading);

    // works, server success
    //let editData = JSON.stringify(data); //works

    // server error 500
    
    //data.state.type = "MainState"
    //data.state["roundReport"] = "";
    //let editData = JSON.stringify(data);
    //console.log(editData); // -> "{"state....";
    
   



 
    fetch('http://localhost:9000/json', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: editData
      })
      .then(async (response) => {
        if (!response.ok) {
          throw new Error(`Server Error: ${response.status}`); // Log status code
        }
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          throw new Error("Response is not JSON");
        }
      })
      .then(clonedData => console.log('Success:', clonedData))
      .catch(error => console.error('Error:', error));
});

/// to server



