import {
    getData,
    COMMON_PARAMETER
} from './index';
import {
    FETCH_VENUES,
    ERROR_VENUES
} from './types';
import {getArraysValues,getElementsCount, ElementMaxOccurance } from './helper'


export function getRecommendation(address) {
    return function (dispatch) {

        const url = `venues/explore?${COMMON_PARAMETER}&query=lunch
        &near=${address}
        &limit=3`
        getData(FETCH_VENUES, ERROR_VENUES, url, dispatch);
    };
}

export const CalculateWinner = (votingCount) => {
    let votingCountArray = getArraysValues(votingCount, "venueIndex")
    let voteCount = getElementsCount(votingCountArray)
    let maxVoteVenue = ElementMaxOccurance(votingCountArray);
    return {
      voteCount,
      winnerCount: voteCount[Number(maxVoteVenue)]
    }
  }