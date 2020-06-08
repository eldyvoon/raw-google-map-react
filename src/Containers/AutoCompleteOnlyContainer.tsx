import React from 'react';
import AutocompleteInput from '../Components/AutoCompleteInput';
import useGoogleMapInit from '../Components/useGoogleMapInit';
import useAutoCompleteMap from './useAutoCompleteMap';

const MapContainerHookVersion = () => {
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
      <p>Your Lat Lng info:</p>
      <pre>{JSON.stringify(location, null, 2)}</pre>
    </div>
  );
};

export default MapContainerHookVersion;
