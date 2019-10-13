import _ from 'lodash'

export const emptyString = ''
export const loadingString = 'Loading...'
export const voteCountInitial = {
    "0": 0,
    "1": 0,
    "2": 0
}
export const makeArray = (count, value) => {
  return  new Array(count).fill(value)
}
export const initialState = {
    participantsCount: 1,
    voting: [],
    voteCount: voteCountInitial,
    winnerCount: 1
}
export const getArraysValues = (array, property) => {
    return _.map(array, property);
}

export const getElementsCount = (array) => {
    return _.countBy(array);
}

export const ElementMaxOccurance = (array) => {
    return _.head(_(array)
        .countBy()
        .entries()
        .maxBy(_.last));
}