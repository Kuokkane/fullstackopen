import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  
  return (
  <div>
    <p>
      {props.part.name} {props.part.exercises}

    </p>
  </div>
  )
}



const Content = (props) => {
  console.log(props)
  const part1 = <Part part={props.partnames[0]}/>
  const part2 = <Part part={props.partnames[1]}/>
  const part3 = <Part part={props.partnames[2]}/>
  return (
    <div>
  
      {part1}
      {part2}
      {part3}
     
    </div>

  )
}

const Total = (props) => {
 
  
  const part1 = props.total[0].exercises
  const part2 = props.total[1].exercises
  const part3 = props.total[2].exercises
  let yhteensa = part1 + part2 + part3
  return (
    <div>
      <p>
     {yhteensa}
      </p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
       <Header course={course.name} />
      <Content partnames={course.parts}/>
      <Total total={course.parts}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))