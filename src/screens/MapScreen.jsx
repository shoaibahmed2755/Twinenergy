import React, { useEffect, useState, useCallback } from "react";
import { GoogleMap, LoadScript, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
  borderRadius: "1rem",
};

const center = { lat: 12.9716, lng: 77.5946 }; // Bangalore

export default function MapScreen() {
  const [places, setPlaces] = useState([]);
  const [selected, setSelected] = useState(null);
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

  const handleLoad = useCallback((map) => {
    const service = new window.google.maps.places.PlacesService(map);

    const request = {
      location: new window.google.maps.LatLng(center.lat, center.lng),
      radius: 5000, // 5 km radius
      type: ["park"], // only parks (green areas)
    };

    service.nearbySearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        setPlaces(results);
      }
    });
  }, []);

  if (!apiKey) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-red-600 font-semibold">
        <p>❌ Google Maps API key is missing.</p>
        <p>Add it in your .env file as VITE_GOOGLE_MAPS_API_KEY.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-8 py-10">
      <h1 className="text-2xl font-semibold text-green-700 mb-6">
        🌱 Green Map of Bangalore
      </h1>

      <div className="shadow-lg rounded-2xl overflow-hidden">
        <LoadScript
          googleMapsApiKey={apiKey}
          libraries={["places"]}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={13}
            onLoad={handleLoad}
          >
            {places.map((place) => (
              <Marker
                key={place.place_id}
                position={{
                  lat: place.geometry.location.lat(),
                  lng: place.geometry.location.lng(),
                }}
                onClick={() => setSelected(place)}
                icon={{
                  url: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
                }}
              />
            ))}

            {selected && (
              <InfoWindow
                position={{
                  lat: selected.geometry.location.lat(),
                  lng: selected.geometry.location.lng(),
                }}
                onCloseClick={() => setSelected(null)}
              >
                <div>
                  <h2 className="font-semibold text-green-800">
                    {selected.name}
                  </h2>
                  {selected.vicinity && (
                    <p className="text-sm text-gray-600">{selected.vicinity}</p>
                  )}
                  {selected.rating && (
                    <p className="text-sm text-yellow-600 mt-1">
                      ⭐ {selected.rating} / 5
                    </p>
                  )}
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
}
