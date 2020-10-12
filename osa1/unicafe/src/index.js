import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = () => {
  return (
    <h1>Give Feedback</h1>
  )
}


const StatisticLine = (props) => {
  return (

    <tr>
      <td>
        {props.text}
      </td>
      <td>
        {props.value}
      </td>
    </tr>

  )
}

const Statistics = (props) => {

  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>Statistics</h1>
         No feedback given
      </div>
    )
  }


  return (

    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="Good" value={props.good} />
          <StatisticLine text="Neutral" value={props.neutral} />
          <StatisticLine text="Bad" value={props.bad} />
          <StatisticLine text="All" value={props.all} />
          <StatisticLine text="Average" value={props.average} />
          <StatisticLine text="Positive" value={props.positive} />
        </tbody>
      </table>
    </div>


  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)



const App = (props) => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const allVotes = good + neutral + bad
  const average = ((good * 1) + (bad * -1)) / allVotes
  const positive = good * 100 / allVotes + "%"

  const handleGood = () => {
    setGood(good + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <Header />
      <Button onClick={handleGood} text='Good' />
      <Button onClick={handleNeutral} text='Neutral' />
      <Button onClick={handleBad} text='Bad' />
      <Statistics good={good} neutral={neutral}
        bad={bad} all={allVotes} average={average} positive={positive} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

