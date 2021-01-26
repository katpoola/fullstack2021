import React, { useState } from "react";
import ReactDOM from "react-dom";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  return (
    <p>
      {props.text}: {props.value}
      {props.symbol}
    </p>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + neutral + bad;
  const average = (good - bad) / all;

  return (
    <div>
      <h1>feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>stats</h1>
      {all === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <Statistics text="good" value={good} />
          <Statistics text="neutral" value={neutral} />
          <Statistics text="bad" value={bad} />
          <Statistics text="all" value={all} />
          <Statistics text="average" value={average} />
          <Statistics text="positive" value={(100 / all) * good} symbol="%" />
        </div>
      )}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
