import { useState } from "react";
import "./PostcardListItem.css"

/** Postcard
 *
 * props: postcard
 *
 * state:
 *
 * renders:
 */
function PostcardListItem({ id, photoUrl, title, message, }) {

  const [isRightsideUp, setIsRightsideUp] = useState(true);

  function handleClick() {
    setIsRightsideUp(curr => !curr);
  }
  return (
    <div
      className="PostcardListItem img-thumbnail card"
      onClick={handleClick}
      height="500">
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
              <h4 className="card-title">{title}</h4>
              <p className="card-text">{message}</p>
            </div>
          </div>

      }

    </div>
  );
}

export default PostcardListItem;

