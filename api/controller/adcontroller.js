import { getFiles as getFilesFromService } from '../services/lighthouseservice.js';

export const getFiles = async (req,res) => {
  try {
    console.log('getFiles controller');
    const files = await getFilesFromService();
    console.log(files);
    const response = files.map(file => ({
      ...file,
      viewableLink: `https://gateway.lighthouse.storage/ipfs/${file.cid}`
    }));
    console.log("response fetched");
    res.json(response);
  } catch (error) {
    console.log('error in getFiles controller');
    res.status(500).json({ error: error.message });
    
  }
};
