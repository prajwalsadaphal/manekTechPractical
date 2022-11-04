import React, {useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import MapView, {Marker, Callout} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import MapViewDirections from 'react-native-maps-directions';
import CalloutView from './CalloutView';

const GOOGLE_MAPS_APIKEY = 'AIzaSyASbCnGDDrUP8GY-UY7WDHjdukhGbxiDgs';

export default function MapViewScreen({route}) {
  let {restaurant} = route.params;
  useEffect(() => {
    // Geolocation.getCurrentPosition(info => console.log('line12', info));
  }, []);
  return (
    <View style={{flex: 1}}>
      <MapView
        initialRegion={{
          latitude: parseFloat(restaurant.latitude),
          longitude: parseFloat(restaurant.longitude),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={{flex: 1}}>
        {/* <MapViewDirections
          origin={{latitude: 37.3318456, longitude: -122.0296002}}
          destination={{latitude: 37.771707, longitude: -122.4053769}}
          apikey={GOOGLE_MAPS_APIKEY}
        /> */}
        <Marker
          tracksViewChanges={true}
          coordinate={{
            latitude: parseFloat(restaurant.latitude),
            longitude: parseFloat(restaurant.longitude),
          }}>
          <Image
            source={require('../../../icons/shop-pin.png')}
            resizeMode="contain"
            style={{width: 40, height: 40}}
          />
         <CalloutView restaurant={restaurant}/>
        </Marker>
      </MapView>
    </View>
  );
}
