import { useState, useEffect } from 'react';
import PhotoPreview from './PhotoPreview';
import PhotoUploadForm from './PhotoUploadForm';
import PostcardiumApi from './api';
import LocationForm from './LocationForm';
import PostcardDetailsForm from './PostcardDetailsForm';
import PostcardCreationForm from './PostcardCreationForm';

/** PhotoUploadPage
 *
 * props:
 *
 * state: photoSource -- url for photo after uploaded
 * renders:
 */
function PhotoUploadPage({ createPostcard, onLocalSave }) {
  console.log("PhotoUploadPage");

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [location, setLocation] = useState()
  const [isLoading, setIsLoading] = useState(false);


  useEffect(function displayPhotoPreview() {
    console.log("useEffect running, displayPhotoPreview");

    /** send file to backend to get location data */
    async function getLocationAndPreview(file){

      const formData = new FormData();
      formData.append("photo", file);
      const locationData = await PostcardiumApi.getLocation(formData);
      console.log("location data:", locationData)

      if(locationData.country){
        setLocation({
          "city": locationData.city || "",
          "state": locationData.state || "",
          "country": locationData.country || ""
        })
      }
      else{
        setLocation(undefined)
      }

      const previewUrl = URL.createObjectURL(selectedFile);
      onLocalSave(locationData.file_name)
      setPreview(previewUrl);

    }

    if (!selectedFile) {
      return;
    }

    getLocationAndPreview(selectedFile);
  }, [selectedFile]);

  function selectPhoto(photo) {
    console.log("You have selected this photo:", photo);
    setSelectedFile(photo);
  }

  function saveLocation(locationData){
    setLocation({
      city:locationData.city,
      state:locationData.state,
      country:locationData.country,
    })
  }

  function handleUpload(data) {
    console.log("You will upload this photo:", selectedFile);
    setIsLoading(true);
    const formData = new FormData();
    formData.append("photo", selectedFile);
    formData.append("city", data.city)
    formData.append("state", data.state)
    formData.append("country", data.country)
    formData.append("message", data.message)
    createPostcard(formData);
  }

  if (isLoading) return <div>LOADING!</div>;
  return (
    <div className="PhotoUploadPage ">
      <div className='row'>
        <div className='col-sm-8 col-12 card'>

          <PhotoPreview photoSource={preview} />
        </div>
        <div className='col-sm-4 col-12 mt-5'>

          <PhotoUploadForm selectPhoto={selectPhoto} />

          {selectedFile && <PostcardDetailsForm
              location={location}
              saveLocation={saveLocation}
              onSubmit={handleUpload} />
          }
        </div>
      </div>
    </div>
  );
}

export default PhotoUploadPage;