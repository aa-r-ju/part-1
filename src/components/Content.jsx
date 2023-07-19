import React from 'react'
import Part from './Part'

 const Content = (props) => {
  return ( <div>
{
  props.parts.map((item,i) => {
    return <Part name = {item.name} exercise = {item.exercises} key = {i}/>

  })
}
</div>)

}
export default Content