// import "needle" library
const needle = require('needle');

// get the breed name from the command-line args
const breedName = process.argv[2];

// case if no name is provided in the command-line
if (!breedName) {
  console.log("Please provide a breed name.");
  process.exit(1);
}

// APIR endpoint for TheCatsAPI
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// fetch the data for the breed
needle.get(url, (error, response) => {
  if (error) {
    console.error("Error fetching breed data:", error);
    return;
  }

  // the body contains the data sent back from the TheCatsAPI server
  const body = response.body;
  // print out the entire body
  // console.log("Body:", body);
  // print out the type of body === object
  // console.log("Type of body:", typeof body);

  // check if the response body is an array with at least one element
  if (Array.isArray(body) && body.length > 0) {
    // access the first entry in the data array
    const breed = body[0];
    // print out the breed description for the user
    console.log("Description:", breed.description);
  } else {
    // edge case if breed is not found
    console.log("Breed not found.");
  }
});