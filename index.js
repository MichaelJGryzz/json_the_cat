// import fetchBreedDescription function
const { fetchBreedDescription } = require("./breedFetcher");

// get the breed name from the command-line args
const breedName = process.argv[2];

// case if no name is provided in the command-line
if (!breedName) {
  console.log("Please provide a breed name.");
  process.exit(1);
}

// EXAMPLE USAGE
fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.log("Error fetching breed data:", error);
    return;
  }

  if (description) {
    console.log("Description:", description);
  } else {
    console.log("Breed not found.");
  }
});
