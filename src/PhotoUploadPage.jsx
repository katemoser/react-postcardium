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
function PhotoUploadPage({uploadPhoto}) {
  console.log("PhotoUploadPage");

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [isLoading, setIsLoading] = useState(false);


  useEffect(function displayPhotoPreview(){
    console.log("useEffect running, displayPhotoPreview");
    if(!selectedFile){
      return;
    }

    const previewUrl = URL.createObjectURL(selectedFile);
    setPreview(previewUrl)
  }, [selectedFile])

  function selectPhoto(photo){
    console.log("You have selected this photo:", photo)
    setSelectedFile(photo);
  }

  function handleUpload(){
    console.log("You will upload this photo:", selectedFile);
    setIsLoading(true)
    const formData = new FormData();
    formData.append("photo", selectedFile);
    uploadPhoto(formData);
  }

    return (
      <div className="PhotoUploadPage">
        PHOTO UPLOAD PAGE
        <PhotoPreview photoSource={preview}/>
        <PhotoUploadForm selectPhoto={selectPhoto} uploadPhoto={handleUpload}/>
      </div>
    )
  }

  export default PhotoUploadPage