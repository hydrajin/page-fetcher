// Implement a node app called fetcher.js.
/* It should take two command line arguments:
1. a URL
2. a local file path */
// Use const args = process.argv.slice(2)??
// const url = args[0];
// const localFilePath = input[1];
const fs = require('fs');
const request = require('request');
const args = process.argv.slice(2);
const url = args[0];
const localFilePath = args[1];
console.log(`URL: ${url} Local File Path: ${localFilePath} `);

// The easiest way to write to files in Node.js is to use the fs.writeFile() API.pw
// create

const fetchSave = (url, localFilePath) => {
  // REQUEST
  request(url, (error, response, body) => {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.

  fs.writeFile(localFilePath, body, error => { // we wont use respone for now
    if (error) {
      console.error(error);
      return;
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}`);
    }
  }
    //file written successfully
  );
});
};
fetchSave(url, localFilePath);
