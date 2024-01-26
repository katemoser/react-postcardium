/** API for interfacing with Postcardium API */

const BASE_API_URL = "http://127.0.0.1:5000/api"
class PostcardiumApi {

  /** upload photo to s3 */
  static async uploadPhoto(formData){
    console.log("upload photo in postcardiumApi. formData=", formData);
      const response = await fetch(`${BASE_API_URL}/photos`, {
        method: "POST",
        body: formData})
      const json = await response.json()
      console.log("after upload, json=",json);
      return json;

  }
}

export default PostcardiumApi;