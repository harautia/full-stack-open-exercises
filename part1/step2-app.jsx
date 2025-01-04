const Header = (props) => {
  console.log(props)
  return (
    <div>
      <p>Header {props.name}</p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <Part part={props.part1} exercise={props.exercise1} />
      <Part part={props.part2} exercise={props.exercise2} />
      <Part part={props.part3} exercise={props.exercise3} />
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part} {props.exercise}
      </p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
       Number of exercises {props.total}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name={course} />
      <Content part1={part1} exercise1={exercises1} part2={part2} exercise2={exercises2} part3={part3} exercise3={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
