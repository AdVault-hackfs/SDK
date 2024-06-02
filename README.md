# AdVault API
Advault's API allows partner companies to integrate ads, posted by our customer companies on [our dashboard](https://github.com/AdVault-hackfs/Final) into their web3 projects.  

## Features
- **Upload text, images, and videos for ads:** Customer companies can upload various types of media to create comprehensive ads.
- **Store ad data securely in Filecoin:** All ad data is stored in Lighthouse storage, which is built on the Filecoin network, ensuring security and durability.
- **Retrieve and display ad data via API:** Partner companies can easily fetch and display the ad data in their blockchain-based applications.
- **Easy integration with partner companies' platforms using SDK:** The API and SDK are designed for seamless integration with various platforms, enhancing usability and efficiency.

## Getting Started

### Prerequisites
- Node.js
- npm (Node Package Manager)

### Installation
1. Clone the repository
2. Navigate to the project directory:
    ```
    cd api
    ```
3. Install the dependencies:
    ```
    npm install
    ```

### Running the API
To start the server, run the following command:
```
npm start
```

The server will be running on http://localhost:3000.

#### API Endpoints
Retrieve List of Ads
Endpoint: GET `/ads/list`

Description: Retrieves a list of ads stored in Lighthouse storage.

Sample Response:

```
[
    {
        "publicKey": "0x4e6d5be93ab7c1f75e30dd5a7f574f42f675eed3",
        "fileName": "sample.txt",
        "mimeType": "text/plain",
        "txHash": "",
        "status": "queued",
        "createdAt": 1691087810426,
        "fileSizeInBytes": "14",
        "cid": "QmQK9V46b4vpNUd7pe7EcCqihBEmcSLH4NVNWukLJhGzgN",
        "id": "1b2623bd-64ca-4434-8619-24c9a1eca840",
        "lastUpdate": 1691087810426,
        "encryption": false,
        "viewableLink": "https://gateway.lighthouse.storage/ipfs/QmQK9V46b4vpNUd7pe7EcCqihBEmcSLH4NVNWukLJhGzgN"
    }
]
```

## Contributing
We welcome contributions from the community to improve the AdVault API. If you have any suggestions, bug fixes, or feature implementations, feel free to open an issue or submit a pull request on our GitHub repository. Contributions of all kinds are appreciated and encouraged!
