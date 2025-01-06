import { useState } from 'react'

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given!</p>
      </div>
    )
  }
  
  return (
  <div>
    <h1>Statistics</h1>
    <p>good {props.good}</p>
    <p>neutral {props.neutral}</p>
    <p>bad {props.bad}</p>
    <p>all {props.all}</p>
    <p>average {(props.good-props.bad) / props.all}</p>
    <p>positive {props.good/props.all * 100} %</p>
  </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGoodClick = () => {
    const updatedGood = good + 1
    setGood(updatedGood)
    setAll(updatedGood + neutral + bad)
  }

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    setAll(good + updatedNeutral + bad)
  }

  const handleBadClick = () => {
    const updatedBad = bad + 1
    setBad(updatedBad)
    setAll(good + neutral + updatedBad)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleGoodClick}> good </button>
      <button onClick={handleNeutralClick}> neutral </button>
      <button onClick={handleBadClick}> bad </button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} />
    </div>
  )
}

export default App
