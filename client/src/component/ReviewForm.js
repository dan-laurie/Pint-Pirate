import React, { useState } from 'react'
import Select from 'react-select'
import { Link } from 'react-router-dom'

const ReviewForm = () => {

  // const [ formData, setFormData ] = useState({
  //   text: '',
  //   rating: '',
  //   imageUpload: '',
  // })

  return (
    <div className='review-page'>
      <main className="section">
        <div className="form-page">
          <div className="column is-6-tablet is-offset-3-tablet is-8-mobile is-offset-2-mobile box">
            <form >
              <div className="form-field">
                <label className="label"><h3>Your Review</h3></label>
                <div className="control">
                  <textarea
                    className="textarea"
                    name="description"
                  />
                </div>
              </div>
              <div className="form-field">
                <label className="label">Your Rating</label>
                <div className="control">
                  <select name="rating">
                    <option value="" disabled></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>
                </div>
              </div>
              <div className="form-field">
                {/* <ImageUpload 
                value={formData.profileImage}
                name="profileImage"
                handleImageUrl={handleImageUrl}
              /> */}
              </div>
              <div className="field">
                <button className="button" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
        {/* <Link to={'/beers'}>
          <h4 className='list-link'>Back to list</h4>
        </Link> */}
      </main>
    </div>
    
  )
  
}

export default ReviewForm