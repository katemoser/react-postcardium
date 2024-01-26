import { useState } from "react";

/** PhotoUploadForm
 *
 * props:
 *
 * state:
 *
 * renders:
 */
function PhotoUploadForm({uploadPhoto, selectPhoto}) {


  function handleChange(evt) {
    const photo = evt.target.files[0]
    selectPhoto(photo);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    uploadPhoto();
  }

  return (
    <div className="PhotoUploadForm" >
        <label htmlFor="photo"> Choose a photo!</label>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleChange} />

          <button onClick={handleSubmit}>Submit photo selection</button>
    </div>
  );
  // <p>PHOTO UPLOAD FORM</p>
}

export default PhotoUploadForm;