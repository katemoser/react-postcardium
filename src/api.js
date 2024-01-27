/** API for interfacing with Postcardium API */

const BASE_API_URL = "http://127.0.0.1:5000/api";
class PostcardiumApi {


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
    return await response.json();
  }

  static async getPostcard(id) {
    console.debug("API getPostcard. id =", id);

    const postcardResponse = await fetch(`${BASE_API_URL}/postcards/${id}`, {
      method: "GET"
    });
    const {postcard} = await postcardResponse.json();
    console.log("postcardData before", postcard);

    const photoResponse = await fetch(
      `${BASE_API_URL}/photos/${postcard.photo_id}`,
      {
        method: "GET"
      });

      const {photo} = await photoResponse.json();
      console.log("photodata", photo)

      postcard.photoUrl = photo.image_url;
    console.log("postcardData after", postcard);


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
    return json.postcard.id;

  }
}

export default PostcardiumApi;