import { useState, useEffect } from 'react';
import PhotoPreview from './PhotoPreview';
import PhotoUploadForm from './PhotoUploadForm';
import PostcardiumApi from './api';

/** PhotoUploadPage
 *
 * props:
 *
 * state: photoSource -- url for photo after uploaded
 * renders:
 */
function PhotoUploadPage({ uploadPhoto }) {
  console.log("PhotoUploadPage");

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(function displayPhotoPreview() {
    console.log("useEffect running, displayPhotoPreview");
    if (!selectedFile) {
      return;
    }

    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl);
  }, [selectedFile]);

  function selectPhoto(photo) {
    console.log("You have selected this photo:", photo);
    setSelectedFile(photo);
  }

  function handleUpload() {
    console.log("You will upload this photo:", selectedFile);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("photo", selectedFile);
    console.log("in photoupload page, formdata=", formData.entries());
    for (let key of formData.entries()) {
      console.log(key[0] + ', ' + key[1]);
    }
    uploadPhoto(formData);
  }

  if (isLoading) return <div>LOADING!</div>;
  return (
    <div className="PhotoUploadPage ">
      <div className='row'>
        <div className='col-sm-8 col-12 card'>

          <PhotoPreview photoSource={preview} />
        </div>
        <div className='col-sm-4 col-12 mt-5'>
          <PhotoUploadForm selectPhoto={selectPhoto} uploadPhoto={handleUpload} />

        </div>
      </div>
    </div>
  );
}

export default PhotoUploadPage;