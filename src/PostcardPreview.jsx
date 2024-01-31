import Photo from "./Photo";

/** PostcardPreview
 *
 * props: imageUrl
 *
 * state: None
 *
 * renders: PostcardCreationPage -> PostcardPreview -> Photo
 */
function PostcardPreview({imageUrl}) {
  console.debug("PostcardPreview, imageUrl", imageUrl);

    return (
      <div className="PostcardPreview" >
       <Photo imageUrl={imageUrl} />
      </div>
    )
  }

  export default PostcardPreview