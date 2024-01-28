/** Postcard
 *
 * props: postcard
 *
 * state:
 *
 * renders:
 */
function PostcardListItem({id, photoUrl, title, message,}) {

    return (
      <div>
        <p>POSTCARD {id}</p>
        <img src={photoUrl} />
        <div> {title}</div>
        <div> {message}</div>


      </div>
    )
  }

  export default PostcardListItem