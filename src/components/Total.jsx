import React from 'react'

 const Total = (props) => {
    console.log(props,)
  return (
    <div> number of exercises {"    "}
        {props.total + props.total1 + props.total3} 
    </div>

  )
}
export default Total
