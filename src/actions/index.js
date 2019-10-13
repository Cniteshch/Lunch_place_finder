import axios from 'axios';
import {
  LOADING
} from './types'
import _ from 'lodash'
import {
  getArraysValues
} from './helper'
export const API_URL = 'https://api.foursquare.com/v2/'
export const CLIENT_ID = '2GVQQTT5YQLNOSKDRE0M4S3MVL4CQRONL2OR4PEOMNF0CPAW'
export const CLIENT_SECRET = 'OG0RQO4RZTSWMGVVWQR03CVHASLETAWUSJJ3FGEJBVCZMJRV'
export const CLIENT_VERSION = '20190924'
export const COMMON_PARAMETER = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${CLIENT_VERSION}`
export const ERROR_RESPONSE = 'Invalid location. Please enter a valid location'


export function errorHandler(dispatch, error, type) {
  let errorMessage = error
  dispatch({
    type,
    payload: errorMessage,
  });
}

export const modifyArrayValues = (arr) => {
  let modifiedArray = []
  let i;
  for (i = 0; i < arr.length; i++) {
    modifiedArray[i] = axios.get(`${API_URL}venues/${arr[i]}?${COMMON_PARAMETER}`)
  }
  return modifiedArray
}

// Get Request
export function getData(action, errorType, url, dispatch) {
  DispatchData(LOADING, true, dispatch)
  const requestUrl = API_URL + url;
  axios.get(requestUrl)
    .then((response) => {
      const {
        data
      } = response
      let Arr = getArraysValues(data.response.groups[0].items, 'venue.id')
      axios.all(modifyArrayValues(Arr)).then(values => {
        DispatchData(action, _.map(values, 'data.response.venue'), dispatch)
      })
    })
    .catch((error) => {
      errorHandler(dispatch, ERROR_RESPONSE, errorType, error);
    });
}



export function DispatchData(action, value, dispatch) {
  dispatch({
    type: action,
    payload: value,
  });
}

