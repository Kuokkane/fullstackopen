import React from 'react'


const Header = (props) => {
    return (
      <div>
        <h1>{props.coursename}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <p>
        {props.name} {props.exercises}
      </p>
    )
  }
  
  const Content = (props) => {
    const parts = props.parts.map((part) => {
      return (<Part key={part.id} name={part.name} exercises={part.exercises} />)
    })
    return (
      <div>{parts}</div>
    )
  }
  
  const Total = (props) => {
    const totalAmount = props.courses.parts.reduce((sum, name) => {
      return sum + name.exercises
    }, 0)
  
    return (
      <b>Total of {totalAmount} exercises</b>
    )
  }
  const Course = (props) => {
  
    return (
      <div>
        <Header coursename={props.course.name} />
        <Content parts={props.course.parts} />
        <Total courses={props.course} />
  
      </div>
    )
  }

  export default Course