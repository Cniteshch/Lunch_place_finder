import {
  combineReducers
} from 'redux';
import VotingReducer from './voting_reducer';

const rootReducer = combineReducers({
  user: VotingReducer
});

export default rootReducer;