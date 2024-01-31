import { useState } from "react";

const blankFormData = {
    "city": "",
    "state": "",
    "country": "",
    "message": "",
};
/** PostcardCreationForm
 *
 * props:
 *
 * state:
 *
 * renders:
 */
function PostcardCreationForm({ selectPhoto, onSubmit, locationData }) {

    const [formData, setFormData] = useState(blankFormData);

    function handlePhotoChange(evt) {
        const photo = evt.target.files[0];
        selectPhoto(photo);
    }

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit();
    }

    return (
        <div className="PhotoUploadForm" >
            <label htmlFor="photo"> Choose a photo!</label>
            <input
                className="btn btn-primary"
                type="file"
                id="photo"
                name="photo"
                onChange={handlePhotoChange} />

            {locationData.city
                ?
                <div className="PostcardCreationForm-locationDisplay" >
                    <div>City: {locationData.city} </div>
                    <div>State: {locationData.state} </div>
                    <div>Country: {locationData.country} </div>
                </div>
                :
                <div className="PostcardCreationForm-locationform">
                    <div className="form-group">

                        <label htmlFor="city">City:</label>
                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">

                        <label htmlFor="state">State:</label>
                        <input
                            name="state"
                            value={formData.state}
                            onChange={handleChange} />
                    </div>

                    <div className="form-group">

                        <label htmlFor="country">Country:</label>
                        <input
                            name="country"
                            value={formData.country}
                            onChange={handleChange} />
                    </div>
                </div>
            }

            <div className="form-group">

                <label htmlFor="message">Message:</label>
                <input
                    name="message"
                    value={formData.message}
                    onChange={handleChange} />
            </div>

            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleSubmit} >
                Submit photo selection
            </button>
        </div>
    );
    // <p>PHOTO UPLOAD FORM</p>
}

export default PostcardCreationForm;