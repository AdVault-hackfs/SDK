const lighthouse = require('@lighthouse-web3/sdk');
const axios = require('axios');
const fs = require('fs');

// Set your Lighthouse API key
const apiKey = '8042ee4f.3d3131d24f0041b8b7bf3b85e336195e';

// Set the path to save the files
const downloadPath = './downloads';

// Function to retrieve all files from Lighthouse
async function retrieveFiles() {
  // Initialize the Lighthouse client
  const client = new lighthouse.Client(apiKey);

  // Retrieve all files from Lighthouse
  const files = await client.getFiles();

  // Loop through each file
  files.forEach((file) => {
    // Get the file details
    const { cid, type, size } = file;

    // Download the file
    axios({
      method: 'GET',
      url: `https://gateway.lighthouse.storage/ipfs/${cid}`,
      responseType: 'stream',
    })
      .then((response) => {
        // Save the file to the download path
        const filePath = `${downloadPath}/${cid}.${type}`;
        const writer = fs.createWriteStream(filePath);

        response.data.pipe(writer);

        writer.on('finish', () => {
          console.log(`File saved at ${filePath}`);
        });

        writer.on('error', (err) => {
          console.error(err);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  });
}

// Export functions for use in the controller
module.exports = {
  retrieveFiles
};
