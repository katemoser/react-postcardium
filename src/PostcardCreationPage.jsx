import { useState } from "react";
import PhotoUploadPage from "./PhotoUploadPage";
import Photo from "./Photo"
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

  const [uploadedPhotoData, setUploadedPhotoData] = useState();

  async function uploadPhoto(formData) {
    console.log("PostcardCreationPage, uploadPhoto, formData=", formData);
    try {
      const photoData = await PostcardiumApi.uploadPhoto(formData);
      setUploadedPhotoData(photoData);
    } catch (err) {
      console.error("ERROR!", err);
    }

  }
  return (
    <div className="PhotoCreationPage">

      POSTCARD CREATION PAGE

      {uploadedPhotoData

        ?
        <div>
          <div>

          UPLOADED!!!
          </div>
          <Photo imageUrl={uploadedPhotoData.image_url} />
          </div>
        :

        <PhotoUploadPage uploadPhoto={uploadPhoto} />
      }

    </div>);

}

export default PostcardCreationPage;