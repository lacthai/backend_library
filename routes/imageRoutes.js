const cloudinary = require('cloudinary');
const router = require('express').Router();
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET
})

router.delete('/:public_id', async(req, res)=> {
  const {public_id} = req.params;
  try {
      await cloudinary.uploader.destroy(public_id);
      res.status(200).send();
  } catch (e) {
      res.status(400).send(e.message)
  }
})

const uploadImage = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.path);
    fs.unlinkSync(file.path);
    return result.secure_url;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to upload image');
  }
}


module.exports = { uploadImage };
module.exports = router;