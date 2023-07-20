import React from 'react'
import Part from './Part'

 const Content = (props) => {
  return ( <div>
{
  props.part1.map((item,i) => {
    return <Part name = {item.name} exercise = {item.exercises} key = {i}/>

  })
}
</div>)

}
export default Content