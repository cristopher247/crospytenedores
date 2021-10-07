import React from "react";
import MapView  from 'react-native-maps';
import openMap from "react-native-open-maps";

export default function Map(props) {
  const { location, name, height } = props;


  let region= {
    latitude: -2.896464,
    longitude: -79.004618
  };

  const openAppMap = () => {
    openMap({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
      query: name
    });
  };
  

  if (location===null){
  
    return (

      <MapView
        style={{ height: height, width: "100%" }}
        initialRegion={region}
        onPress={openAppMap}
      >
        <MapView.Marker
          coordinate={{
            latitude: region.latitude,
            longitude: region.longitude
            
          }}
        />
      </MapView>
    );
  }else{
    return (

      <MapView
        style={{ height: height, width: "100%" }}
        initialRegion={location}
        onPress={openAppMap}
      >
        <MapView.Marker
          coordinate={{
            latitude: location.latitude,
            longitude: location.longitude
          }}
        />
      </MapView>
    );
  }
  
 
}
