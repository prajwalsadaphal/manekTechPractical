import {LOAD_REASTAURENT_LIST, USER_SIGNIN} from '../action.types';
import Realm from 'realm';
import {ReastaurantSchema, RESTAURANT_SCHEMA} from '../../models/Models';
import { ToastAndroid } from 'react-native';

const databaseOptions = {
  path: 'realmT4.realm',
  schema: [ReastaurantSchema],
  schemaVersion: 1,
};

export const loadData = (paginationCount) => (dispatch) => {
  Realm.open(databaseOptions).then(realm => {
    if (realm.objects(RESTAURANT_SCHEMA).length > 0) {
      dispatch({
        type: LOAD_REASTAURENT_LIST,
        payload: realm.objects(RESTAURANT_SCHEMA).slice(0,paginationCount),
      });

      console.log('Database Data');
    } else {
      console.log('Fetch Data');

      fetch(
        'http://205.134.254.135/~mobile/interview/public/api/restaurants_list',
        {method: 'GET'},
      )
        .then(response => response.json())
        .then(result => {
          if (result.data && result.data.length > 0) {
            realm.write(() => {
              result.data.forEach(restaurant => {
                realm.create(RESTAURANT_SCHEMA, restaurant);
              });
            });
            dispatch({
              type: LOAD_REASTAURENT_LIST,
              payload: realm.objects(RESTAURANT_SCHEMA).slice(0,paginationCount),
            });
          } else {
            dispatch({
              type: LOAD_REASTAURENT_LIST,
              payload: [],
            })
          }
        })
        .catch(error => {
          console.log(error);
          ToastAndroid.showWithGravity("Fetch Error",1000,0)
        })
    }
  })
  .catch(error => {
    console.log(error);
    ToastAndroid.showWithGravity("DB Error",1000,0)
  })
  
};


export const loginUser = (username, password) => (dispatch) => {
  if (username === 'admin@gmail.com' && password === 'admin') {
    ToastAndroid.showWithGravity("Login Successful",1000,0)
    dispatch({
      type: USER_SIGNIN,
      payload: username,
    });
  }else{
    ToastAndroid.showWithGravity("Login Faild",1000,0)
    
  }
};
