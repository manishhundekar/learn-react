import React from "react";

class StudentClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counterValue: 0,
    };

    this.handleDecrement = this.handleDecrement.bind(this)
  }

  handleIncrement = () => {
    console.log("Update State Variable");
    this.setState({
      counterValue: this.state.counterValue + 1,
    });
  };

  handleDecrement() {
    console.log("Update State Variable");
    this.setState({
      counterValue: this.state.counterValue - 1,
    });
  }

  render() {
    return (
      <>
        <h2>{this.props.studentName}</h2>
        <h2>{this.state.counterValue}</h2>
        <button onClick={this.handleIncrement}>+ Increment</button>
        <button onClick={this.handleDecrement}>- Decrement</button>
      </>
    );
  }
}

export default StudentClass;
