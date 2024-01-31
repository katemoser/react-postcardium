import { useState } from "react";

/** PhotoUploadForm
 *
 * props:
 *
 * state:
 *
 * renders:
 */
function PhotoUploadForm({selectPhoto}) {


  function handlePhotoChange(evt) {
    const photo = evt.target.files[0]
    selectPhoto(photo);
  }

  // function handlePhotoSubmit(evt){
  //   evt.preventDefault();
  //   uploadPhoto();
  // }

  return (
    <div className="PhotoUploadForm" >
        <label htmlFor="photo"> Choose a photo!</label>
        <input
          className="btn btn-primary"
          type="file"
          id="photo"
          name="photo"
          onChange={handlePhotoChange} />

          {/* <button
            className="btn btn-outline-primary mt-5"
            onClick={handlePhotoSubmit} >
            Submit photo selection
          </button> */}
    </div>
  );
  // <p>PHOTO UPLOAD FORM</p>
}

export default PhotoUploadForm;