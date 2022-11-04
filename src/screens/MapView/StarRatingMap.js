import React from 'react';
import {Image, StyleSheet,Text, View} from 'react-native';
import { moderateScale } from '../../helpers/metric';

export default function StarRating({rating}) {
  let stars = [];

  for (var i = 1; i <= 5; i++) {
    let path = require('../../../icons/Star-fill.png');
    if (i > Math.floor(rating)) {
      path = require('../../../icons/Star-empty.png');
    }
    stars.push(<Image key={i} style={styles.image} source={path} />);
  }

  return <Text style={styles.container}>{stars}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: moderateScale(10),
    height: moderateScale(10),
  },
});
