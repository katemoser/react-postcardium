import { useState } from "react";
import { useNavigate } from "react-router-dom";

import PostcardiumApi from "./api";



/** PostcardForm
 *
 * props: postcard
 *
 * state:
 *
 * renders:
 */
function PostcardForm({ photoId }) {

  const [formData, setFormData] = useState({
    title: "",
    message: ""
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  async function handleSubmit() {
    const data = formData;
    data.photoId = photoId;
    try {
      const id = await PostcardiumApi.createPostcard(data);
      navigate(`/postcards/${id}`);
    } catch (err) {
      console.error("ERROR!", err);
    }
  }


  return (
    <div className="PostcardForm mt-5">
        <div className="form-group">

          <label htmlFor="title">Title: </label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange} />
        </div>

        <div className="form-group">

          <label htmlFor="message">Message:</label>
          <input
            name="message"
            value={formData.message}
            onChange={handleChange} />
        </div>

        <button className="btn btn-primary " onClick={handleSubmit}>
          Make Postcard
        </button>
    </div>
  );
}

export default PostcardForm;