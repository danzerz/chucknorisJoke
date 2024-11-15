// Wait until the DOM is fully loaded || purpose of DOMContentLoaded is that it so that the function does not
// called before the Dom is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("joke-btn"); //getting the btn element from the DOM
  const fetchJoke = () => {
    //function to retrieve the joke from the API
    const xhr = new XMLHttpRequest(); //creating a new XMLHttpRequest object
    // Specify the method and endpoint
    xhr.open("GET", "https://api.chucknorris.io/jokes/random"); //Get the random joke from the API
    // Set up a function to handle the response
    xhr.onreadystatechange = function () {
      //onreadystatechange is a function that is called when the readyState property of the XMLHttpRequest object changes
      if (xhr.readyState === 4) {
        // if Request is done
        const divContent = document.getElementById("joke"); //getting the div element from the DOM
        if (xhr.status === 200) {
          // and if the request is successful
          try {
            // Parse the JSON and extract the joke
            const res = JSON.parse(xhr.responseText);
            divContent.textContent = res.value; // display the extracted jokes
          } catch (error) {
            // if there is an error in the response
            divContent.textContent = "Error parsing the joke.";
            console.error("JSON parsing error:", error);
          }
        } else {
          // if the request is not successful
          // Handle errors
          divContent.textContent = "Failed to load joke. Please try again.";
          //also printing error in console
          console.error(
            `Request failed with status ${xhr.status}: ${xhr.statusText}`
          );
        }
      }
    };
    // Sending the request to the server
    xhr.send();
  };
  //event listener to get the joke
  btn.addEventListener("click", fetchJoke);
});
