import React from 'react';
import AutocompleteInput from '../Components/AutoCompleteInput';
import GoogleMap from '../Components/GoogleMap';
import useGoogleMapInit from '../Components/useGoogleMapInit';
import useAutoCompleteMap from './useAutoCompleteMap';

const MapContainerHookVersion = ({ id }: { id: string }) => {
  const [google] = useGoogleMapInit();

  const [location, setNewLocation] = useAutoCompleteMap({
    lat: 0,
    lng: 0,
  });

  const handleChangeLocation = (newLocation: LatLng) => {
    setNewLocation(newLocation);
  };

  return (
    <div>
      <AutocompleteInput
        google={google}
        handleChangeLocation={handleChangeLocation}
      />
      <br />
      <br />
      <GoogleMap google={google} location={location} mapId={id} />
    </div>
  );
};

export default MapContainerHookVersion;
