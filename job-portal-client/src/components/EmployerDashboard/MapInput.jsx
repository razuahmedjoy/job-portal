import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMap, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ImageUpload from '../Shared/ImageUpload';

const MapInput = () => {
    const [position, setPosition] = useState([51.505, -0.09]);
    const [address, setAddress] = useState('');
    const [lat, setLat] = useState(51.505);
    const [lng, setLng] = useState(-0.09);
    const [suggestions, setSuggestions] = useState([]);
    const [zoom, setZoom] = useState(6);

    const markerIcon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        shadowSize: [41, 41],
    });

    const handleAddressChange = async (event) => {
        const query = event.target.value;
        setAddress(query);

        if (query.length > 2) {
            const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${query}`);
            const data = await response.json();
            setSuggestions(data);
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectSuggestion = (suggestion) => {
        const { lat, lon, display_name } = suggestion;
        setAddress(display_name);
        setPosition([parseFloat(lat), parseFloat(lon)]);
        setLat(parseFloat(lat));
        setLng(parseFloat(lon));
        setSuggestions([]);
        setZoom(6); // Zoom in when a suggestion is selected
    };

    const handleTrackLocation = () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            setPosition([latitude, longitude]);
            setLat(latitude);
            setLng(longitude);

            // Reverse geocode to get address from lat/lng
            const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`);
            const data = await response.json();
            setAddress(data.display_name);
            const map = useMap();
            map.setView([latitude, longitude], zoom);
            setZoom(6); // Zoom in to current location
        });
    };

    const LocationMarker = () => {
        useMapEvents({
            dragend() {
                const map = this.getMap();
                const { lat, lng } = map.getCenter();
                setLat(lat);
                setLng(lng);
                setPosition([lat, lng]);
            },
        });

        return position === null ? null : (
            <Marker
                position={position}
                icon={markerIcon}
                draggable={true}
                eventHandlers={{
                    dragend: (event) => {
                        const newLatLng = event.target.getLatLng();
                        setLat(newLatLng.lat);
                        setLng(newLatLng.lng);
                        setPosition([newLatLng.lat, newLatLng.lng]);
                    },
                }}
            />
        );
    };

    const ChangeView = ({ center, zoom }) => {
        const map = useMap();
        map.setView(center, zoom);
        return null;
    };

    return (
        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className='mb-5 w-full'>
                    <label className='font-medium' htmlFor="name">Location : </label>
                    <div className='relative w-full'>
                        <input
                            className='bg-blue-100/30 focus:bg-white focus:border w-full focus:border-primary duration-300 rounded-md outline-none py-3 px-4'
                            type="text"
                            value={address}
                            onChange={handleAddressChange}
                            style={{ flexGrow: 1 }}
                        />
                        <button
                            className='absolute right-5 top-2 bg-primary text-white py-1 px-2 rounded-lg'
                            type="button"
                            onClick={handleTrackLocation}
                        >
                            Locate Me
                        </button>
                        {suggestions.length > 0 && (
                            <div className="autocomplete-dropdown-container" style={{ position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 1000, backgroundColor: 'white', border: '1px solid #ccc' }}>
                                {suggestions.map((suggestion) => (
                                    <div
                                        key={suggestion.place_id}
                                        className="suggestion-item"
                                        style={{ cursor: 'pointer', padding: '10px', borderBottom: '1px solid #ccc' }}
                                        onClick={() => handleSelectSuggestion(suggestion)}
                                    >
                                        {suggestion.display_name}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                <MapContainer center={position} zoom={zoom} style={{ height: '400px', width: '100%' }}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution=''
                    />
                    <LocationMarker />
                    <ChangeView center={position} zoom={zoom} />
                </MapContainer>
                <div className="grid grid-cols-2 gap-5 my-8">
                    <div className='flex flex-col gap-2 mb-3'>
                        <label className='font-medium' htmlFor="name">Latitude : </label>
                        <input value={lat} readOnly className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4' type="text" />
                    </div>
                    <div className='flex flex-col gap-2 mb-3'>
                        <label className='font-medium' htmlFor="name">Longitude:</label>
                        <input className='bg-blue-100/30 focus:bg-white focus:border focus:border-primary duration-300 rounded-md outline-none py-3 px-4' type="text" value={lng} readOnly />
                    </div>
                </div>

                <div className='flex flex-col gap-2'>
                    <h4 className='text-md font-medium md:text-lg mb-4'>Logo Image</h4>

                    <ImageUpload />
                </div>

            </form>
        </div>
    );
};

export default MapInput;
