const adService = require('../services/adservices');

exports.getAdById = async (req, res) => {
  try {
    const adId = req.params.id;
    const ad = await adService.fetchAdById(adId);
    res.json(ad);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ad' });
  }
};

exports.getAllAds = async (req, res) => {
  try {
    const ads = await adService.fetchAllAds();
    res.json(ads);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve ads' });
  }
};
