import mapboxgl from 'mapbox-gl';
import { useEffect } from 'react';
import MapboxLanguage from '@mapbox/mapbox-gl-language';

mapboxgl.accessToken = 'pk.eyJ1Ijoic2l5a3QiLCJhIjoiY2xnbjhpeWtjMDVpZDNzcjY1aXIydmIzZCJ9.iBwcCw63ZuiovFvN2qD3iA';

const HelloWorld = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [116.403119, 39.925338],
      zoom: 10,
    });

    map.addControl(new MapboxLanguage({ defaultLanguage: 'zh-Hans' }));
    return () => map.remove();
  }, []);
  return <div id="map"></div>;
};

const App = () => {
  return (
    <div>
      <HelloWorld />
    </div>
  );
};

export default App;
