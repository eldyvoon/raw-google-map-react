import { useState, useEffect } from 'react';

const useAutoCompleteMap = (initialLocation: LatLng) => {
  const [{ lat, lng }, setNewLocation] = useState<LatLng>(initialLocation);

  useEffect(() => {
    setNewLocation({
      lat,
      lng,
    });
  }, [lat, lng]);

  return [{ lat, lng }, setNewLocation] as const;
};

export default useAutoCompleteMap;
