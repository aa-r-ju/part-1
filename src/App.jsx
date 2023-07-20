import Header from "./components/Header"
import Total from "./components/Total"
import Content from "./components/Content"
const App = () => {
  const course = 'Half Stack application development'
  const part1 =  [
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


  return (
    <div>
      <Header book = {course}/>
      <Content part1 = {part1}/>
      <Total total = {part1}/> 
    </div>
  )
}

export default App
