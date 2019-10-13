

import React from "react";
import TableRow from "./table_row";
import MapElement from '../shared/mapList'
import {makeArray} from '../../actions/helper'

const SearchSection = ({
  venues,
  handleWinnerComponent,
  getVoteIndex,
  participantsCount,
  loading
}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>
            <p>Participants</p>
          </th>
          {venues.map((venue, index) => {
            return (
              <th key={index}>
                {handleWinnerComponent(index)}
                <h3>
                  <a
                    href={venue.url ? venue.url : venue.shortUrl}
                    target="_blank"
                  >
                    {venue.name}
                  </a>
                </h3>
                <p>
                  <MapElement array={venue.categories} property='name' />
                </p>
                <p>{venue.rating}</p>
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody key={loading}>
        {makeArray(participantsCount,1).map((value, index) => (
          <TableRow getVoteIndex={getVoteIndex} rowIndex={index} key={index} />
        ))}
      </tbody>
    </table>
  );
};

export default SearchSection;
