import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View,Text, StyleSheet} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { moderateScale, verticalScale } from '../../helpers/metric';
import { loadData } from '../../store/actions/actions';
import RestaurantCard from './RestaurantCard';

export default function RestaurantList() {
  const dispatch = useDispatch()
  const restaurantList = useSelector(state => state.restaurentList)
  const [paginationCount,setPaginationCount] = useState(10)

  useEffect(() => {
    dispatch(loadData(paginationCount))
  }, [paginationCount]);


  const handleOnLoadMorePress = ()=>{
    setPaginationCount(paginationCount+10)
  }

  const renderFooter = ()=>{
    if(restaurantList.length === paginationCount){
      return(
        <View style={{alignItems:"center",marginVertical:"2%"}}>
          <TouchableOpacity onPress={handleOnLoadMorePress} style={styles.button}>
              <Text style={styles.buttonText}>Load more records</Text>
            </TouchableOpacity>
        </View>
        )
    }else{
      return(<></>)
    }
  
  }

  return (
    <View style={{flex: 1, paddingVertical: '4%'}}>
      <FlatList
        ItemSeparatorComponent={() => <View style={{height:verticalScale(15)}}></View>}
        data={restaurantList}
        keyExtractor={(restaurant, index) => restaurant.id}
        renderItem={({item, index, separators}) => (
          <RestaurantCard restaurant={item} />
        )}
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: '4%',paddingBottom:"2%"}}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth:moderateScale(2),
    borderColor: '#14dc8d',
    height: moderateScale(30),
    marginVertical: verticalScale(10),
    borderRadius: 5,
    width:"50%",
    padding:0
  },
  buttonText: {
    color: '#14dc8d',
    fontWeight: '600',
    fontSize: moderateScale(15),
  },
})