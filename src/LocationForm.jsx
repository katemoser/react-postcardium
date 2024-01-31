import { useState } from "react";

const blankFormData = {
    "city": "",
    "state": "",
    "country": "",
};
/**
 *
 *
 */
function LocationForm({onSubmit}) {

    const [formData, setFormData] = useState(blankFormData);

    function handleChange(evt) {
        const { name, value } = evt.target;
        setFormData(data => ({ ...data, [name]: value }));
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        onSubmit(formData);
    }

    return (
        <div className="LocationForm">
            <div className="form-group">

                <label htmlFor="city">City:</label>
                <input
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange} />
            </div>

            <div className="form-group">

                <label htmlFor="state">State:</label>
                <input
                    required
                    name="state"
                    value={formData.state}
                    onChange={handleChange} />
            </div>

            <div className="form-group">

                <label htmlFor="country">Country:</label>
                <input
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange} />
            </div>
            <button
                className="btn btn-outline-primary mt-5"
                onClick={handleSubmit} >
                Select Location
            </button>
        </div>
    );
}

export default LocationForm