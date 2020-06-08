import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import MapContainer from './Containers/MapContainer';
import MapContainerHookVersion from './Containers/MapContainerHookVersion';
import AutoCompleteOnlyContainer from './Containers/AutoCompleteOnlyContainer';

import Typography from '@material-ui/core/Typography';

const App = () => {
  return (
    <Provider store={store} data-testid='myapp'>
      <Typography variant='h5'>Redux map container with redux</Typography>
      <MapContainer id='redux-map-1' />
      <br />
      <br />
      <Typography variant='h5'>Map container with hook</Typography>
      <MapContainerHookVersion id='hook-map-1' />
      <br />
      <br />
      <Typography variant='h5'>Autocomplete-only container</Typography>
      <AutoCompleteOnlyContainer />
    </Provider>
  );
};

export default App;
