import React, { useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, FeatureGroup } from "react-leaflet";
import mapMarker from '../../assets/final_logo.png'
import L from "leaflet";

import { EditControl } from "react-leaflet-draw";
import 'leaflet/dist/leaflet.css'; 
import 'leaflet-draw/dist/leaflet.draw.css'
import osm from "../osm-providers.js";



// Override the default icon for ALL markers (including drawing tools)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconUrl: mapMarker,
    iconRetinaUrl: mapMarker,
    shadowUrl: null, // Remove shadow if you don't want it
    iconSize: [30, 50],
    iconAnchor: [15, 50],
    popupAnchor: [0, -50],
})

export const Safety_map = () => {
    const [center, setCenter] = useState({ lat: 14.412687356644929, lng: 120.98123147922286 })
    const ZOOM_LEVEL = 20;
    const mapRef = useRef();

    const _created = (e) => console.log(e)

    return (
        <>
            <div className='safetyMap'>
                <h2>Safety Map</h2>
                <div className='mapContainer'>
                    <MapContainer
                        center={[center.lat, center.lng]}
                        zoom={ZOOM_LEVEL}
                        ref={mapRef}
                        style={{ height: '500px', width: '100%' }}
                    >
                        <FeatureGroup>
                            <EditControl position='topright' onCreated={_created} draw={{rectangle: false, circle: false, circlemarker: false, polygon: false, polyline: false }} />
                        </FeatureGroup>
                       <TileLayer
                            url={osm.mapTiler.url}
                            attribution={osm.mapTiler.attribution}
                        />
                        {/* This marker will now use your custom logo */}
                        <Marker
                            position={[14.412687356644929, 120.98123147922286]}
                        >
                            <Popup>
                                <b>CvSU - Bacoor Campus</b>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}
