// import "needle" library
const needle = require('needle');

// function to fetch breen description
const fetchBreedDescription = function(breedName, callback) {
  // API endpoint for TheCatsAPI
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  // fetch the data for the breed
  needle.get(url, (error, response) => {
    if (error) {
      callback(error, null); // pass error to callback function
      return;
    }

    // the body contains the data sent back from the TheCatsAPI server
    const body = response.body;

    // check if the response body is an array with at least one element
    if (Array.isArray(body) && body.length > 0) {
      // access the first entry in the data array
      const breed = body[0];
      // pass the breed description to the callback function
      callback(null, breed.description);
    } else {
      // edge case if breed is not found, pass null descripton
      callback(null, null);
    }
  });
};


// export fetchBreedDescription function
module.exports = { fetchBreedDescription };
