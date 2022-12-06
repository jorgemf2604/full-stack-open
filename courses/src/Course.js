const Course = ({course}) => {
    console.log()
    return (
      <>
        <Header text={course.name}/> 
        <Content parts={course.parts}/>
        <Total data={course.parts}/> 
      </>
    )
  } 
  
  const Header = ({text}) => {
    return (
      <>
        <h1>{text}</h1>
      </>
    )
  }
  
  const Content = ({parts}) => {
    return (
      <>
        {parts.map(part => <Part key={part.id} data={part}/> )}
      </>
    )
  }
  
  const Total = ({data}) => {
    const total = data.map(course => course.exercises).reduce((total, currentValue) => total + currentValue, 0)
    return (
      <>
        <hr />
        <p>Total of {total} exercises</p>
      </>
    )
  }
  
  const Part = ({data}) => {
    const {name, exercises} = data;
    return (
      <>
        <p>{name} {exercises}</p>
      </>
    )
  }

export {Course}