import React from "react";
import styled from "styled-components";
import Statistics from "./components/Statistics ";
import FeedbackOptions from "./components/FeedbackOptions";

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onBtnClick = (evt) => {
    this.setState((prevState) => ({ [evt]: prevState[evt] + 1 }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const { good } = this.state;

    return total === 0 ? 0 : Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="Feedback">
        <h1 className="Feedback__title">Please leave feedback</h1>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onBtnClick}
        ></FeedbackOptions>

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        ></Statistics>
      </div>
    );
  }
}

export default App;
