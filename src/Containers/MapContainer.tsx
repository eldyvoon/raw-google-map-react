import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import AutocompleteInput from '../Components/AutoCompleteInput';
import GoogleMap from '../Components/GoogleMap';
import useGoogleMapInit from '../Components/useGoogleMapInit';
import { useSelector, useDispatch } from 'react-redux';
import { getLocationState } from '../redux/selector';
import { changeLocation } from '../redux/actions/locationActions';
import styles from 'styled-components';

const Flex = styles.div`
  display: flex;
`;

const MapContainer = ({ id }: { id: string }) => {
  const [google] = useGoogleMapInit();

  const location = useSelector(getLocationState) as LocationPayload;
  const dispatch = useDispatch();

  const handleChangeLocation = (changedLocation) =>
    dispatch(changeLocation(changedLocation));

  return (
    <div>
      <Flex>
        <AutocompleteInput
          google={google}
          handleChangeLocation={handleChangeLocation}
        />
        {location.loading && <CircularProgress />}
      </Flex>
      <br />
      {location.error && location.error}
      <GoogleMap google={google} location={location} mapId={id} />
    </div>
  );
};

export default MapContainer;
