import React from 'react';
import {Callout} from 'react-native-maps';
import {View, Text, Image} from 'react-native';
import {horizontalScale, moderateScale, verticalScale} from '../../helpers/metric';
import StarRatingMap from './StarRatingMap';
export default function CalloutView({restaurant}) {
  return (
    <Callout
      tooltip={true}
      style={{
        width: horizontalScale(180),
        height:verticalScale(50),
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius:8
      }}>
      <Text style={{paddingHorizontal:"2%"}}>
        <Image
          source={require('../../../icons/map-img.png')}
          resizeMode="contain"
          style={{width: 30, height: 30}}
        />
      </Text>
      <View style={{justifyContent:"center"}}>
        <Text style={{fontSize:moderateScale(12)}}>{restaurant.title}</Text>
        <StarRatingMap rating={restaurant.rating}/>
      </View>
    </Callout>
  );
}
