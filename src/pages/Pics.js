import React from "react";
import "../styles/Pics.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { mapData } from "../components/MapData";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster"; //to create map cluster
//pics page
//this is where my internet art is
export default function Pics() {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/484/484167.png",
    iconSize: [30, 30], //size of the icon in pixels
  });

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
      className: "custom-marker-cluster",
      iconSize: point(35, 35, true),
    });
  };
  return (
    <section>
      <section className="pics-heading">
        <h1>pics</h1>
        <main>
          {/* This is the coordinates of Manhatthan where Gossip Girl takes place in */}
          <MapContainer center={[40.7831, -73.9712]} zoom={14}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createCustomClusterIcon}
            >
              {mapData.map((marker, index) => (
                <div key={index}>
                  <Marker position={marker.geocode} icon={customIcon}>
                    <Popup>
                      <h3 className="map-heading">{marker.name}</h3>
                      <p className="map-para">{marker.gossip}</p>
                      <img
                        src={marker.image}
                        alt={marker.name}
                        className="map-image"
                      />
                    </Popup>
                  </Marker>
                </div>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </main>
      </section>
    </section>
  );
}
