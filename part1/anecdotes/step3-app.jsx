import { useState } from 'react'

const Display = (props) => {
  return (
    <div> {props.text[props.random]} <br />
    Has {props.list} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected , setSelected] = useState(Math.floor(Math.random() * anecdotes.length))

  const [vote_list, setVote] = useState(Array(anecdotes.length).fill(0));
  
  const handleNextAnecdote = () => {
    console.log(vote_list)
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVote = () => {
    console.log(vote_list)
    const copy = [...vote_list]
    copy[selected] += 1
    setVote(copy)
  }
  
  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <Display text={anecdotes} random={selected} list={vote_list[selected]} />
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleNextAnecdote}>Next Anecdote</button>
      <h1>Anecdote of the most votes</h1>
      {anecdotes[vote_list.indexOf(Math.max(...vote_list))]}
    </div>
  )
}

export default App
