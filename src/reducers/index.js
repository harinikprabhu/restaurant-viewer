import initialState from "../store/initialState";
import * as types from "../store/actionTypes";

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RESTAURANTS:
      return {
        ...state,
        isFetchingRestaurants: true,
      }
    case types.RECEIVE_RESTAURANTS:
      return {
        ...state,
        isFetchingRestaurants: false,
        restaurants: action.data
      }
    case types.FETCH_CITIES:
      return {
        ...state,
        isFetchingCities: true,
      }
    case types.RECEIVE_CITIES:
      return {
        ...state,
        isFetchingCities: false,
        cities: action.data
      }
    default:
      return state;
  }
}

export default globalReducer;
