import React, { useEffect } from 'react';
import styles from 'styled-components';

const GoogleMapWrap = styles.div`
  width: 100%;
  height: 50vh;
`;

const GoogleMap = ({ google, mapId, location }: GoogleMapInitProps) => {
  const { lat, lng } = location;

  useEffect(() => {
    const hasLatLng = lat !== 0 && lng !== 0;

    if (google) {
      const mapElementById = document.getElementById(mapId);

      if (mapElementById) {
        const map = new google.maps.Map(mapElementById, {
          center: { lat, lng },
          zoom: hasLatLng ? 15 : 1,
          zoomControl: true,
          draggable: true,
        });

        if (hasLatLng) {
          new google.maps.Marker({
            position: { lat, lng },
            map,
            animation: google.maps.Animation.DROP,
          });
        }
      }
    }
  }, [google, mapId, lat, lng]);

  return <GoogleMapWrap id={mapId} />;
};

export default GoogleMap;
