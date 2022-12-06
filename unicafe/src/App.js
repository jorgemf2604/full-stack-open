import { useState } from 'react';

function Button({text, callback}) {
  return (
    <>
      <button onClick={callback}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <>
      <tr>
        <td>{text}: </td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = good / total;

  if (total === 0) {
    return (
      <>
        <p>No feedback given</p>
      </>
    )
  }

  return (
    <>
      <h1>Statistics</h1>
      <table>
        <StatisticLine text="Good" value={good}/>
        <StatisticLine text="Neutral" value={neutral}/>
        <StatisticLine text="Bad" value={bad}/>
        <StatisticLine text="All" value={total}/>
        <StatisticLine text="Average" value={average}/>
        <StatisticLine text="Positive" value={positive}/>
      </table>
    </>
  )
}

function App() {
  // state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  // events handlers
  const clickGood = () => {
    setGood(good + 1)
  }

  const clickBad = () => {
    setBad(bad + 1)
  }

  const clickNeutral = () => {
    setNeutral(neutral + 1)
  }

  return (
    <div>
      <h1>Give feedback</h1>
      <Button callback={clickGood} text="Good"/>
      <Button callback={clickNeutral} text="Neutral"/>
      <Button callback={clickBad} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

export default App;
