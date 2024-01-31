import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  const [fileName, setFilename] = useState();
  console.debug(
    "PostcardCreationPage, fileName =", fileName);

  const navigate = useNavigate();

  /** uploads photo and creates postcard */
  async function uploadPhoto(formData) {
    console.log("PostcardCreationPage, uploadPhoto, formData=", formData);

    try {
      formData.append("file_name", fileName);
      const photoData = await PostcardiumApi.uploadPhoto(formData);

      const postcardResponse = await PostcardiumApi.createPostcard(
        {
          photoId: photoData.id,
          message: formData.get("message"),
          title: "this is the title!"
        }
      );

      navigate(`/postcards/${postcardResponse.postcard.id}`);
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

      <PhotoUploadPage createPostcard={uploadPhoto} onLocalSave={updateFileName} />

      {/* } */}

    </div>);

}

export default PostcardCreationPage;