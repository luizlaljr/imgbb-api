const axios = require('axios');
const FormData = require('form-data');

module.exports = {

  async index(req, res) {
    return res.status(200).json({
      "type-message":"success",
      "message": "Read to upload image",
    })
  },
  
  async store(req, res) {
    try {
      const {
        key,
        name,
        image
      } = req.body;
      
      const formData = new FormData();
      formData.append('key', key);
      formData.append('name', name);
      formData.append('image', image);

      const upload = await axios.post('https://api.imgbb.com/1/upload', formData, {
        headers: formData.getHeaders()
      })

      
      if (upload.data.status !== 200) {
        throw error
      }

      return res.status(201).json({
        "type-message":"success",
        "message": "Image upload successfully",
        "title-image":upload.data.data.title,
        "url-image": upload.data.data.url,
        "url-thumb": upload.data.data.thumb.url
      })
      
    } catch (error) {
      console.log(error)
      return res.status(500).json({
        "type-message":"error",
        "message": "There was a problem when image upload.",
        "message-error": error.message,
      });
    }
  }
}