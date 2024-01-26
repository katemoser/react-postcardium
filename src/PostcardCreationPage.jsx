import { useState } from "react";
import PhotoUploadPage from "./PhotoUploadPage";
import PostcardiumApi from './api';


/** PostcardCreationPage
 *
 * props:
 *
 * state:
 *
 * renders:
 */
function PostcardCreationPage() {
  console.log("PostcardCreationPage");

  const [uploadedPhotoUrl, setUploadedPhotoUrl] = useState("");

  async function uploadPhoto(formData) {
    console.log("PostcardCreationPage, uploadPhoto, formData=", formData);
    try {
      const photoUrl = await PostcardiumApi.uploadPhoto(formData);
      setUploadedPhotoUrl(photoUrl);
    } catch (err) {
      console.error("ERROR!", err);
    }

  }
  return (
    <div className="PhotoCreationPage">

      POSTCARD CREATION PAGE

      {uploadedPhotoUrl

        ?
        <div> UPLOADED</div>
        :

        <PhotoUploadPage uploadPhoto={uploadPhoto} />
      }

    </div>);

}

export default PostcardCreationPage;