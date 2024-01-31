import { useState } from "react";
import LocationForm from "./LocationForm";

/**
 *
 *
 */
function PostcardDetailsForm({ location, saveLocation, onSubmit }) {

    const [formData, setFormData] = useState({ message: "" });

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit() {
        const postcardDetails = {
            city: location.city,
            state: location.state,
            country: location.country,
            message: formData.message
        };
        onSubmit(postcardDetails);
    }

    // TODO: factor message out into separate form!
    return (
        <div>

            {!location ?
                <LocationForm onSubmit={saveLocation} />
                :
                <>
                    <div className="PostcardDetailsForm-location">
                        <div>City: {location.city}</div>
                        <div>State: {location.state}</div>
                        <div>Country: {location.country}</div>
                    </div>
                    <div className="PostcardDetailsForm-messageForm">
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
                        </button>;
                    </div>
                </>
            }
        </div>

    );


}

export default PostcardDetailsForm;