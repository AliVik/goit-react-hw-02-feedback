import React from "react";
import styled from "styled-components";
import Statistics from "./components/Statistics ";
import FeedbackOptions from "./components/FeedbackOptions";
import { arrayOf } from "prop-types";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onGoodBtnClick = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  onNeutralBtnClick = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  onBadBtnClick = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  onBtnClick = (evt) => {
    // if (evt.target.id.toLowerCase()===)
    // Object.keys(this.state.map(stateElem => {
    //   console.log(stateElem)
    // })
  };
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();

    return total === 0 ? 0 : Math.round((this.state.good * 100) / total);
  };
  render() {
    return (
      <div className="Feedback">
        <h1 className="Feedback__title">Please leave feedback</h1>
        {/* <FeedbackOptions options={'Good','Neutral','Bad'} onLeaveFeedback={this.onGoodBtnClick,this.onNeutralBtnClick,this.onBadBtnClick}></FeedbackOptions> */}
        <ul className="Feedback__list">
          <li className="Feedback__item">
            <button type="button" onClick={this.onGoodBtnClick} id="Good">
              Good
            </button>
          </li>
          <li className="Feedback__item">
            <button type="button" onClick={this.onNeutralBtnClick} id="Neutral">
              Neutral
            </button>
          </li>
          <li className="Feedback__item">
            <button type="button" onClick={this.onBadBtnClick} id="Bad">
              Bad
            </button>
          </li>
        </ul>

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}

export default App;
