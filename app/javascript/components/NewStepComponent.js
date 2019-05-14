import React, { Component } from "react";

export default class NewStepComponent extends Component {
  constructor(props) {
    super(props);

    const {edit} = this.props;
    console.log(this.props);
    const steps = {};
    if (edit) {
      this.props.steps.forEach((s) => {
        steps[s.number] = s.content
      });
    }
    this.state = {
      numSteps: edit ? this.props.steps.length : 1,
      steps,
    };

    this.renderSteps = this.renderSteps.bind(this);
  }
  handleOnInputChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    const { steps } = this.state;
    steps[id] = value;
    this.setState({ steps });
  }
  handleOnAddStepClick(e) {
    e.preventDefault();
    let { numSteps } = this.state;
    numSteps++;
    this.setState({ numSteps });
  }
  renderSteps() {
    const numSteps = this.state.numSteps;
    return [...Array(numSteps).keys()].map(num => {
      let step = num + 1;
      return (
        <div className="input-group my-2" style={{height: "150px"}} key={step}>
          <div className="input-group-prepend">
            <span className="input-group-text">
              Step &nbsp; <span>{step}</span>
            </span>
          </div>
          <textarea
            className="form-control"
            aria-label="With textarea"
            onChange={this.handleOnInputChange.bind(this)}
            id={step}
            value={this.state.steps[step]}
          />
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        {this.renderSteps()}
        <button
          className="btn btn-primary"
          onClick={this.handleOnAddStepClick.bind(this)}
        >
          Add a step
        </button>
      </div>
    );
  }
}
