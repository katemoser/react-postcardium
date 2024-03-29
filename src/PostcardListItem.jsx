import { useState } from "react";
import "./PostcardListItem.css";

/** Postcard
 *
 * props: id, photoUrl, message
 *
 * state: isRightsideUp : boolean
 *
 * renders: PostcardsList
 */
function PostcardListItem({ id, photoUrl, message, }) {

  const [isRightsideUp, setIsRightsideUp] = useState(true);

  function handleClick() {
    setIsRightsideUp(curr => !curr);
  }
  return (
    <div
      className="PostcardListItem img-thumbnail card"
      onClick={handleClick}>
      {
        isRightsideUp
          ?
          <img
            className="PostcardListItem-photo img-fluid card border-primary"
            src={photoUrl} />
          :

          <div className="PostcardListItem-message card border-primary mb-3" >
            <div className="card-header">Postcard id: {id}</div>
            <div className="card-body">
              <p className="card-text">{message}</p>
            </div>
          </div>
      }
    </div>
  );
}

export default PostcardListItem;

