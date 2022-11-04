import {LOAD_REASTAURENT_LIST } from "../action.types"

const initialState = []

// const initialState =[{"id": 1, "latitude": "22.4459119", "longitude": "70.0532439", "rating": 4, "title": "Lagi Lagan Restaurant"}, {"id": 2, "latitude": "22.4477814", "longitude": "70.7732439", "rating": 4, "title": "Zayka Restaurant"}, {"id": 3, "latitude": "22.4606577", "longitude": "70.2462409", "rating": 3, "title": "7 Seas Restaurant"}, {"id": 4, "latitude": "22.4606577", "longitude": "71.0562409", "rating": 4, "title": "Hotel President"},{"id": 1, "latitude": "22.4459119", "longitude": "70.0532439", "rating": 4, "title": "Lagi Lagan Restaurant"}, {"id": 2, "latitude": "22.4477814", "longitude": "70.7732439", "rating": 4, "title": "Zayka Restaurant"}, {"id": 3, "latitude": "22.4606577", "longitude": "70.2462409", "rating": 3, "title": "7 Seas Restaurant"}, {"id": 4, "latitude": "22.4606577", "longitude": "71.0562409", "rating": 4, "title": "Hotel President"},{"id": 1, "latitude": "22.4459119", "longitude": "70.0532439", "rating": 4, "title": "Lagi Lagan Restaurant"}, {"id": 2, "latitude": "22.4477814", "longitude": "70.7732439", "rating": 4, "title": "Zayka Restaurant"}, {"id": 3, "latitude": "22.4606577", "longitude": "70.2462409", "rating": 3, "title": "7 Seas Restaurant"}, {"id": 4, "latitude": "22.4606577", "longitude": "71.0562409", "rating": 4, "title": "Hotel President"}]

const restaurentListReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_REASTAURENT_LIST:
      return  action.payload
    default:
      return state
  }
}

export default restaurentListReducer