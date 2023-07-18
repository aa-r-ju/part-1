import Header from "./components/Header"
//import Part from "./components/Content"
import Total from "./components/Total"
import Content from "./components/Content"
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
      <Header book = {course}/>
      <Content course = {part1} course1 = {exercises1} course2 = {part2} course3 = {exercises2} course4 = { part3} course5 = {exercises3}/>
      <Total total = {exercises1} total1 = {exercises2} total3 = {exercises3}/>
    </div>
  )
}

export default App