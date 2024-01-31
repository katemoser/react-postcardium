import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import PostcardiumApi from './api';
import PostcardPreview from "./PostcardPreview";
import PhotoUploadForm from "./PhotoUploadForm";
import PostcardDetailsForm from "./PostcardDetailsForm";


/** PostcardCreationPage
 *
 * props: None
 *
 * state:
 *    localFileName -- string name of where file is temporarily stored on server
 *    selectedFile -- file object after selected
 *    location -- object containing photo location information
 *    previewUrl -- string url of temporary url for image preview
 *
 * renders: RoutesList -> PostcardCreationPage -> PhotoPreview
 *                                             -> PostcardDetailsForm
 *                                             -> PhotoUploadForm
 */
function PostcardCreationPage() {

  // rename to localFileName
  const [localFileName, setLocalFileName] = useState();
  const [selectedFile, setSelectedFile] = useState();
  const [location, setLocation] = useState();
  const [previewUrl, setPreviewUrl] = useState();

  console.debug("PostcardCreationPage, fileName =", localFileName);
  console.debug("selectedFile =", selectedFile);
  console.debug("previewUrl =", previewUrl);
  console.debug("location =", location);

  const navigate = useNavigate();

  useEffect(function displayPhotoPreview() {
    console.log("useEffect running, displayPhotoPreview");

    /** send file to backend to get location data and local file name*/
    async function getLocationAndPreview(file) {

      const formData = new FormData();
      formData.append("photo", file);
      const locationData = await PostcardiumApi.getLocation(formData);
      console.log("location data:", locationData);

      if (locationData.country) {
        setLocation({
          "city": locationData.city || "",
          "state": locationData.state || "",
          "country": locationData.country || ""
        });
      }
      else {
        setLocation(undefined);
      }

      const previewUrl = URL.createObjectURL(selectedFile);
      setLocalFileName(locationData.file_name);
      setPreviewUrl(previewUrl);

    }

    if (!selectedFile) {
      return;
    }

    getLocationAndPreview(selectedFile);
  }, [selectedFile]);

  // TODO: figure out loading!

  /**
   * uploads photo and creates postcard
   *
   * takes object like {city, state, country, message}, redirects to detail page
   * on success
   *
   * */
  async function uploadPhotoAndCreatePostcard(postcardDetails) {
    console.log("PostcardCreationPage, uploadPhoto, formData=", postcardDetails);

    try {
      postcardDetails.file_name = localFileName;
      const photoData = await PostcardiumApi.uploadPhoto(postcardDetails);

      const postcardData = await PostcardiumApi.createPostcard(
        {
          photoId: photoData.id,
          message: postcardDetails.message,
        }
      );

      navigate(`/postcards/${postcardData.id}`);
    } catch (err) {
      console.error("ERROR!", err);
    }

  }

  /** sets location in state */
  function saveLocation({ city, state, country }) {
    setLocation({ city, state, country });
    // console.log("SAVELOCATION", locationData);
  }

  /** stores file selected in state, to trigger use effect */
  function selectPhoto(photo) {
    console.log("You have selected this photo:", photo);
    setSelectedFile(photo);
  }


  return (
    <div className="PhotoCreationPage mt-3">
      <div className='row'>
        <div className='col-sm-8 col-12 card'>

          <PostcardPreview imageUrl={previewUrl} />
        </div>
        <div className='col-sm-4 col-12 mt-5'>

          <PhotoUploadForm selectPhoto={selectPhoto} />

          {selectedFile && <PostcardDetailsForm
            location={location}
            saveLocation={saveLocation}
            onSubmit={uploadPhotoAndCreatePostcard} />
          }
        </div>
      </div>
    </div>);

}

export default PostcardCreationPage;