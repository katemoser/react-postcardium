/** Photo
 *
 * props: postcard
 *
 * state:
 *
 * renders:
 */
function Photo({imageUrl}) {
  console.log("Photo Component, IMAGE URL", imageUrl);

    return (
      <div className="Photo" >
        <img src={imageUrl}/>
      </div>
    )
  }

  export default Photo