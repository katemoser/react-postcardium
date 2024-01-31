import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PostcardiumApi from "./api";
import Photo from "./Photo";

/** PostcardDetailPage
 *
 * props: None
 *
 * state: postcardData like {id, message, photo_url, location, photo_id, created_at}
 *
 * renders: RoutesList ->  PostcardDetailPage -> Photo
 */
function PostcardDetailPage() {

  const [postcardData, setPostcardData] = useState();


  const { id } = useParams();
  console.debug("detail page. data=", postcardData, "id=", id);

  useEffect(function fetchPostcard() {
    /** Make API request for info on postcard, saves in state */
    async function getPostcard() {
      try {
        const postcard = await PostcardiumApi.getPostcard(id);
        setPostcardData(postcard);
      } catch (err) {
        console.error("ERROR!", err);
      }
    }

    getPostcard();
  }, [id]);

  if (!postcardData) return <div>LOADING</div>;

  return (
    <div className="PostcardDetailPage" >

      <div className="row">
        <div className="col col-md-2"></div>
        <div className="col-12 col-md-8 ">
          <div className="card">

          <Photo imageUrl={postcardData.photo_url} />
          </div>

          <div className="col col-md-2"></div>

          <div className="PostcardListItem-message card border-primary mb-3" >
            <div className="card-header">Postcard id: {id}</div>
            <div className="card-body">
              <h4 className="card-title">{postcardData.title}</h4>
              <p className="card-text">{postcardData.message}</p>
              <p >Location: {postcardData.location}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PostcardDetailPage;