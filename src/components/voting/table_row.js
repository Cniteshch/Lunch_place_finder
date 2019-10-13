import React, { Component } from "react";
import Input from "../shared/input";
import TD from "../voting/td";
import {makeArray} from '../../actions/helper'

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  vote(index){
      const {rowIndex} = this.props
      const {name} = this.state
    this.setState({ active: index })
    if (this.props.getVoteIndex) {
        this.props.getVoteIndex(rowIndex,name,index);
      }
  }

  getValue = (name) => {
    this.setState({name});
  };

  render() {
    const { name, active } = this.state;
    return (
      <tr>
        <td>
          {" "}
          <Input label="Type here" getValue={this.getValue} value={name} />
        </td>

        {makeArray(3,1).map((value, index) => {
          return active === index ? (
            <TD key={index} backGround="bg_green" rightTickStyle='rightTickMax' />
          ) : (
            <td key={index} onClick={() => this.vote(index) }>
              <div></div>
            </td>
          );
        })}
      </tr>
    );
  }
}

export default HomePage;
