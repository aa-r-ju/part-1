import React from 'react'

 const Part = (props) => {
  return (
    <div>
<p>{props.chapter.course}    {props.chapter.course1}</p> 
<p> {props.chapter.course2} {props.chapter.course3}</p>
<p>{props.chapter.course4} { props.chapter.course5}</p>
</div>
  )
}
export default Part
