import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostcardiumApi from "./api";
import Photo from "./Photo";
import PostcardForm from "./PostcardForm";

/** PostcardDetailPage
 *
 * props:
 *
 * state:
 *
 * renders:
 */
function PostcardDetailPage() {

  const [postcardData, setPostcardData] = useState();


  const { id } = useParams();
  console.debug("detail page. data=", postcardData, "id=", id)

  useEffect(function fetchPostcard() {
    async function getPostcard() {
      try{
        const postcard = await PostcardiumApi.getPostcard(id);
        setPostcardData(postcard);
      } catch(err){
        console.error("ERROR!", err);
      }
    }

    getPostcard()
  }, [id])

  if(!postcardData) return <div>LOADING</div>

  return (
    <div className="PostcardDetailPage" >
      <p>POSTCARD DETAIL PAGE</p>

      <Photo imageUrl={postcardData.photo_url} />

      <div> Title: {postcardData.title}</div>
      <div> Message: {postcardData.message}</div>
    </div>
  )
}

export default PostcardDetailPage;