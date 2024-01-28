import { useState } from "react";
import PhotoUploadPage from "./PhotoUploadPage";
import Photo from "./Photo";
import PostcardForm from './PostcardForm';
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

  console.debug("creation page. data=", uploadedPhotoData);
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
    <div className="PhotoCreationPage mt-3">

      {uploadedPhotoData

        ?
        <div>
          <div className="row">
            <div className="col-8">
              <div className="row">
                <Photo imageUrl={uploadedPhotoData.image_url} />
              </div>

              <div className="row">
                <div className="card">
                  <p>message will go here!</p>
                </div>
              </div>
            </div>

            <div className="col-4">
              <div className="px-auto">
                <PostcardForm photoId={uploadedPhotoData.id} />
              </div>

            </div>
          </div>
        </div>
        :

        <PhotoUploadPage uploadPhoto={uploadPhoto} />

      }

    </div>);

}

export default PostcardCreationPage;