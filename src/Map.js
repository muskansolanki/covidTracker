import React from 'react'
import { useMap, MapContainer,TileLayer ,Popup,Marker} from "react-leaflet";
import './Map.css'
import { showDataOnMap } from './Util';

  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }
function Map({countries,casesType,center1,zoom}) {
    return (
        <div className="map">
            <MapContainer center={center1} zoom={zoom} scrollWheelZoom={true}>
                <ChangeView center={center1} zoom={zoom} />
                <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={center1}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                </Marker>
                {showDataOnMap(countries,casesType)}
            </MapContainer>
        </div>
    )
}

export default Map;
