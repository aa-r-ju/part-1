import React from 'react'

 const Total = (props) => {
    
  return (
<div>
 Number of exercises {props.total.reduce((accumulator,currentVal)=> accumulator+currentVal.exercises,0)}

</div>

  )
  }

  export default Total