import React from 'react'
import 'dotenv/config'
import axios from 'axios'

const ImageUpload = ({ name, handleImageUrl }) => {

  const handleChange = async (e) => {
    const dataToSend = new FormData()
    dataToSend.append('file', e.target.files[0])
    dataToSend.append('upload_preset', imagePreset)
    const { data } = await axios.post(imageUrl, dataToSend)
    handleImageUrl(data.url)
  } 

  return (
    <>
      <label htmlFor={name}>Profile Image</label>
      <input type="file" name={name} className='input' onChange={handleChange} />
    </>
  )
}

export default ImageUpload
