import { useState } from "react";
import PhotoUploadPage from "./PhotoUploadPage";
// import Photo from "./Photo";
// import PostcardForm from './PostcardForm';
import PostcardiumApi from './api';
import { useNavigate } from "react-router-dom";


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

  const [fileName, setFilename] = useState();

  const navigate = useNavigate();

  console.debug("creation page. data=", fileName);

  async function uploadPhoto(formData) {
    console.log("PostcardCreationPage, uploadPhoto, formData=", formData);
    try {
      formData.append("file_name", fileName);
      const photoData = await PostcardiumApi.uploadPhoto(formData);
      // console.log("RESPONSE FROM API AFTER UPLOAD", photoData)

      const postcardResponse = await PostcardiumApi.createPostcard(
        {
          photoId: photoData.id,
          message: formData.get("message"),
          title: "this is the title!"
        }
      );
      // console.log("AFTER POSTCARD CREATIONL:",  postcardResponse)
      navigate(`/postcards/${postcardResponse}`);
      // setUploadedPhotoData(photoData);
    } catch (err) {
      console.error("ERROR!", err);
    }

  }

  function updateFileName(filename) {
    console.log("UPDATE FILENAME IS RUNNING:", fileName);
    setFilename(filename);
  }


  return (
    <div className="PhotoCreationPage mt-3">

      {/* {uploadedPhotoData

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
        : */}

      <PhotoUploadPage createPostcard={uploadPhoto} onLocalSave={updateFileName} />

      {/* } */}

    </div>);

}

export default PostcardCreationPage;