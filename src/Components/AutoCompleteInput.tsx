import React, { useEffect, useState, useRef } from 'react';
import TextField from '@material-ui/core/TextField';

const AutocompleteInput = ({
  google,
  handleChangeLocation,
}: AutocompleteInputProps) => {
  const inputRef = useRef(null);
  const [query, setQuery] = useState<string>('');

  const handlePlaceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    const currentInputRef = inputRef.current;

    if (google && currentInputRef) {
      const autocomplete = new google.maps.places.Autocomplete(
        currentInputRef,
        {
          types: ['geocode'],
        }
      );
      autocomplete.addListener('place_changed', () => {
        const location = autocomplete.getPlace().geometry?.location;
        if (location)
          handleChangeLocation({ lat: location.lat(), lng: location.lng() });
      });
    }
  }, [google, handleChangeLocation]);

  return (
    <TextField
      inputRef={inputRef}
      onChange={handlePlaceChange}
      defaultValue={query}
      label='Where you want to go?'
      fullWidth
    />
  );
};

export default AutocompleteInput;
