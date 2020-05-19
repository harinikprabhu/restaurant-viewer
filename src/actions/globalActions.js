import axios from 'axios';
import {GET_CITIES, GET_RESTAURANTS} from "../utils/endpoints";
import * as types from '../store/actionTypes';

export const getCities = () => async (dispatch) => {
  dispatch({type: types.FETCH_CITIES});
  await axios.get(GET_CITIES).then(response => {
    console.log(response.data);
    dispatch({
      type: types.RECEIVE_CITIES,
      data: response.data.cities
    })
  })
};

export const getRestaurants = (city) => async (dispatch) => {
  dispatch({type: types.FETCH_RESTAURANTS});
  let restaurants = [];
  let totalRecords = 0;
  let page = 1;
  do {
    const url = GET_RESTAURANTS + '&city=' + city + '&page=' + page;
    const res = await axios.get(url);
    // console.log("res ", res, " page: ", page);
    totalRecords = res.data.total_entries;
    restaurants = restaurants.concat(res.data.restaurants);
    // console.log("restaurants", restaurants, res.data.restaurants);
    page++;
  } while (restaurants.length < totalRecords)
  dispatch({type: types.RECEIVE_RESTAURANTS, data: restaurants});
}
