const DEFAULT_IMAGE = "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"

/** Photo
 *
 * props: imageUrl
 *
 * state: None
 *
 *          PhotoUploadPage
 * renders: PostcardDetailPage -> Photo
 */
function Photo({imageUrl=DEFAULT_IMAGE}) {
  console.debug("Photo Component, IMAGE URL", imageUrl);

    return (
      <div className="Photo" >
        <img className="img-fluid"src={imageUrl}/>
      </div>
    )
  }

  export default Photo