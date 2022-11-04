import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import { horizontalScale, moderateScale, verticalScale } from '../../helpers/metric';
import StarRating from './StarRating';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function RestaurantCard({restaurant}) {
  const navigation = useNavigation();

  const handleOnLocationClick = () => {
    navigation.navigate('MapView',{restaurant});
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: '#fff',
        padding: '2%',
        elevation: 4,
        borderRadius: 5,
      }}>
      <View style={{width: '20%'}}>
        <Image
          source={require('../../../icons/img.png')}
          // resizeMode="contain"
          style={{width: horizontalScale(60), height: verticalScale(70),borderRadius:4,margin:horizontalScale(4)}}
        />
        
      </View>
      <View
        style={{
          width: '80%',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: 10,
        }}>
        <View style={{width: '80%', paddingLeft: '4%'}}>
          <Text style={{color:"#000",fontWeight: '400',fontSize:moderateScale(15),marginVertical:verticalScale(5)}}>
            {restaurant.title ? restaurant.title : ''}
          </Text>
          <StarRating rating={restaurant.rating}/>
        </View>
        <View style={{width: '20%'}}>
          <TouchableOpacity
            onPress={() => handleOnLocationClick()}
            style={{
              backgroundColor: '#14dc8d',
              borderRadius: 4,
              width: horizontalScale(35),
              height: verticalScale(40),
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../../icons/map.png')}
              resizeMode="contain"
              style={{width: horizontalScale(20), height: verticalScale(20)}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
