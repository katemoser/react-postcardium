import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const libraries = ['places'];

const mapContainerStyle = {
    width: '40vw',
    height: '30vh',
};

function PostcardMap({ lat, lng }) {

    console.debug("PostcardMap. lat=", lat, "lng=", lng);

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
        libraries,
    });

    if (loadError) {
        return <div>Error loading maps</div>;
    }

    if (!isLoaded) {
        return <div>Loading maps</div>;
    }

    return (

        <div>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={14}
                center={{ lat, lng }}
            >
                <Marker position={{ lat, lng }} />
            </GoogleMap>
        </div>
    );
}

export default PostcardMap;