import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import RestaurantList from '../screens/RestaurantList/RestaurantList';
import {View, Text, StyleSheet} from 'react-native';
import MapViewScreen from '../screens/MapView/MapView';
import {moderateScale} from '../helpers/metric';
import Login from '../screens/Login/Login';
import {useSelector} from 'react-redux';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  const authState = useSelector(state => state.auth);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState.isAuthenticated ? (
          <>
            <Stack.Screen
              name="RestaurantList"
              component={RestaurantList}
              options={{
                headerTitle: 'Restaurant List',
                headerStyle: {backgroundColor: '#14dc8d'},
                headerTitleStyle: {color: '#fff'},
                headerTitleAlign: 'center',
                // headerLeft: () => (
                //   <View>
                //     <Text style={styles.backBtn} x>
                //       Back
                //     </Text>
                //   </View>
                // ),
              }}
            />
            <Stack.Screen
              name="MapView"
              component={MapViewScreen}
              options={{
                headerTitle: 'Map View',
                headerStyle: {backgroundColor: '#14dc8d'},
                headerTitleStyle: {color: '#fff'},
                headerTitleAlign: 'center',
                headerTintColor:"#fff"
              }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    color: '#fff',
    fontWeight: '600',
    fontSize: moderateScale(15),
    marginLeft: '10%',
  },
});
