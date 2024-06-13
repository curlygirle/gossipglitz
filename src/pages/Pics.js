//importing the necessary components
import React from "react";
import "../styles/Pics.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { mapData } from "../components/MapData";
import { Icon, divIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster"; //to create map cluster
import ScrollToTop from "../components/ScrollToTop";

//pics page
//this is where my internet art is
//it is an interactive map using react-leaflet with markers and clusters
export default function Pics() {
  //custom icon for markers
  //imported from flaticon
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/484/484167.png",
    iconSize: [30, 30], //size of the icon in pixels
  });

  //this function creates cluster icons
  //it appears when you zoom further out of map
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
          {/* this is the coordinates of Manhatthan where Gossip Girl takes place in */}
          <MapContainer center={[40.7831, -73.9712]} zoom={14}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* marker cluster group for clustering markers */}
            <MarkerClusterGroup
              chunkedLoading
              iconCreateFunction={createCustomClusterIcon}
            >
              {/* mapping through mapData array to create markers */}
              {mapData.map((marker, index) => (
                <div key={index}>
                  {/* the marker component */}
                  <Marker position={marker.geocode} icon={customIcon}>
                    {/* the popup for each marker - it will display information below */}
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
      <ScrollToTop />
    </section>
  );
}
