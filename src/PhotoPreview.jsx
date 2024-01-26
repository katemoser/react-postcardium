/** PhotoPreview
 *
 * props: photoSource -- a url for the image
 *
 * state:
 *
 * renders:
 */

const DEFAULT_IMAGE = "https://t3.ftcdn.net/jpg/03/45/05/92/360_F_345059232_CPieT8RIWOUk4JqBkkWkIETYAkmz2b75.jpg"
function PhotoPreview({photoSource=DEFAULT_IMAGE}) {
  console.log("PhotoUploadPage photoSource:", photoSource);


    return (
      <div className="PhotoPreview" >
        <img src={photoSource}></img>
        PHOTO PREVIEW
      </div>
    )
  }

  export default PhotoPreview