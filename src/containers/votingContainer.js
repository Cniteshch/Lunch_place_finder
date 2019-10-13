import React, { Component } from "react";
import { connect } from "react-redux";
import App from "../components/app";
import { getRecommendation, CalculateWinner } from "../actions/voting";
import {
  voteCountInitial,
  emptyString,
  loadingString,
  initialState
} from "../actions/helper";
import Table from "../components/voting/table";
import Tickmark from "../components/shared/rightTick";
import Button from "../components/shared/button";
import SearchSection from "../components/voting/searchSection";

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      participantsCount: 1,
      votings: [],
      voteCount: voteCountInitial,
      winnerCount: 1
    };
  }

  getRecommend = () => {
    this.props.getRecommendation(this.state.location);
    this.setState(initialState);
  };
  getVoteIndex = (rowIndex, name, venueIndex) => {
    const { votings } = this.state;
    votings[rowIndex] = {
      name,
      venueIndex
    };
    this.setState({ votings });
    this.winnerVenue(votings);
  };

  winnerVenue = votings => {
    this.setState(CalculateWinner(votings));
  };

  getValue = value => {
    this.setState({ location: value });
  };

  handleWinnerComponent = index => {
    const { voteCount, winnerCount } = this.state;
    if (voteCount[index] === winnerCount) {
      return <Tickmark rightTickStyle="rightTickHead" />;
    }
  };

  addParticipants = () => {
    const { participantsCount } = this.state;
    this.setState({
      participantsCount: participantsCount + 1
    });
  };

  render() {
    const { location, participantsCount } = this.state;
    const { loading, venues, error } = this.props;
    const showLoading = loading ? loadingString : emptyString;
    const errorMessage = error ? error : emptyString;
    return (
      <App>
        <div>
          <SearchSection
            inputLabel="Enter Location"
            buttonLabel="Search"
            value={location}
            getValue={this.getValue}
            getRecommend={this.getRecommend}
          />
          {errorMessage}
          {!loading && venues.length ? (
            <div>
              <Table
                venues={venues}
                handleWinnerComponent={this.handleWinnerComponent}
                getVoteIndex={this.getVoteIndex}
                participantsCount={participantsCount}
                addParticipants={this.addParticipants}
                loading={loading}
              />
              <div>
                <Button
                  onClickFunction={this.addParticipants}
                  label="add participants"
                />
              </div>
            </div>
          ) : (
            showLoading
          )}
        </div>
      </App>
    );
  }
}

function mapStateToProps(state) {
  return {
    venues: state.user.venues,
    loading: state.user.loading,
    error: state.user.error
  };
}

export default connect(
  mapStateToProps,
  {
    getRecommendation
  }
)(MainPage);
