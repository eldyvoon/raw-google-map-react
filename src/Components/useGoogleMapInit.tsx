import { useState, useEffect } from 'react';

const useGoogleMapInit = () => {
  const [google, setGoogle] = useState<any>();

  const initMap = () => {
    setTimeout(() => {
      setGoogle(window.google);
    }, 500);
  };

  useEffect(() => {
    const createScriptLoadMap = () => {
      if (!window.initMap) {
        const index = window.document.getElementsByTagName('script')[0];
        const script = window.document.createElement('script');
        script.src = `//maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}&libraries=places&callback=initMap`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          initMap();
        };
        index?.parentNode?.insertBefore(script, index);
        window.initMap = true;
      } else {
        initMap();
      }
    };

    createScriptLoadMap();
  }, []);

  return [google];
};

export default useGoogleMapInit;
