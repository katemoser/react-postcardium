/** API for interfacing with Postcardium API */

const BASE_API_URL = "http://127.0.0.1:5000/api";
class PostcardiumApi {

  /** get location data from photo */
  static async getLocation(formData){
    console.log("upload photo in postcardiumApi. formData=", formData);
    const response = await fetch(`${BASE_API_URL}/photos/exif`, {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    console.log("after upload, json=", json);
    return json;
  }

  /** upload photo to s3 */
  static async uploadPhoto(formData) {
    console.log("upload photo in postcardiumApi. formData=", formData);
    const response = await fetch(`${BASE_API_URL}/photos`, {
      method: "POST",
      body: formData
    });
    const json = await response.json();
    console.log("after upload, json=", json);
    return json;

  }

  static async getPostcards() {
    console.debug("API getPhotos");

    const response = await fetch(`${BASE_API_URL}/postcards`, {
      method: "GET"
    });
    const {postcards} = await response.json();
    console.log("************* postcards in get", postcards);
    return postcards;
  }

  /** Gets data about postcard */
  static async getPostcard(id) {
    console.debug("API getPostcard. id =", id);

    const postcardResponse = await fetch(`${BASE_API_URL}/postcards/${id}`, {
      method: "GET"
    });
    const {postcard} = await postcardResponse.json();
    return postcard;
  }

  static async createPostcard({ photoId, title, message }) {
    console.debug("createPostcard. id:", photoId, "title:", title, "message:", message);

    const body = JSON.stringify({ photoId, title, message });


    const response = await fetch(`${BASE_API_URL}/postcards`, {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: body
    });

    const json = await response.json();

    console.log("got back from the api:", json);
    return json;

  }
}

export default PostcardiumApi;