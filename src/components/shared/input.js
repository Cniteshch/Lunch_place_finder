import React, { Component } from "react";
import InputBox from "react-toolbox/lib/input/Input";

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value ? this.props.value : "",
      label: this.props.label ? this.props.label : "Enter here"
    };
  }

  handleChange = (field, value) => {
    this.setState({ ...this.state, [field]: value });
    if (this.props.getValue) {
      this.props.getValue(value, "input");
    }
  };

  render() {
    const { label, value } = this.state;
    return (
      <div>
        <InputBox
          type="text"
          label={label}
          value={value}
          onChange={this.handleChange.bind(this, "value")}
        />
      </div>
    );
  }
}


export default App;
