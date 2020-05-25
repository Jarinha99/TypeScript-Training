import React, { Component } from "react";
import CounterValue from "./ValueCount";
import logRenderer from "../decorators/logRenderer";

interface ICounterProps {
  initialValue?: number;
}

interface ICounterState {
  value?: number;
}

@logRenderer
export default class Counter extends Component<ICounterProps, ICounterState> {
  public state = { value: this.props.initialValue || 0 };

  private setValue = (delta: number) => {
    this.setState({
      value: this.state.value + delta,
    });
  };

  render() {
    return (
      <div>
        <CounterValue count={this.state.value} />
        <button
          onClick={() => {
            this.setValue(10);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            this.setValue(-10);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
