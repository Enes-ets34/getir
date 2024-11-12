'use client'
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import L, { LatLng, LeafletMouseEvent } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapComponentProps } from './map.types';

const MapComponent: React.FC<MapComponentProps> = ({ onLocationSelect }) => {
  const [selectedPosition, setSelectedPosition] = useState<LatLng | null>(null);

  const customMarkerIcon = new L.DivIcon({
    className: 'custom-marker-icon',
    html: '<div class="pin"></div><div class="pulse"></div>',
  });

  const LocationMarker = () => {
    useMapEvents({
      click(event: LeafletMouseEvent) {
        const { lat, lng } = event.latlng;
        const latLng = new LatLng(lat, lng);
        setSelectedPosition(latLng);
        onLocationSelect(lat, lng);
      },
    });

    return selectedPosition ? (
      <Marker position={selectedPosition} icon={customMarkerIcon} />
    ) : null;
  };

  return (
    <div className='flex justify-center items-center my-5'>
      <MapContainer
        center={[41.0082, 28.9784]}
        zoom={12}
        className='w-full max-w-lg h-[300px] rounded-lg shadow-lg'
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; OpenStreetMap contributors'
        />
        <LocationMarker />
      </MapContainer>
    </div>
  );
};

export default MapComponent;
