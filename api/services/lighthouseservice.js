import lighthouse from '@lighthouse-web3/sdk';

export const getFiles = async () => {
  console.log("Lighthouse triggered"); 
  
  try{
    const cid = "QmeMsykMDyD76zpAbinCy1cjb1KL6CVNBfB44am15U1XHh"
  const fileInfo = await lighthouse.getFileInfo(cid);
  const response = await lighthouse.getUploads("e3249f31.6343ea5208de4fdda4befca92b3e3746");
  
  console.log(response);
  
  if (!response.ok) {
    throw new Error('Failed to fetch files from Lighthouse');
  }
  
  const data = await response.json();
  console.log(data.data.fileList);
  return data.data.fileList;
}catch(error){
  console.log('error in getFiles service', error.message);
  throw error;}
};
