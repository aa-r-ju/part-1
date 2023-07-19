import React from 'react'

 const Total = (props) => {
    let val = 0;
    for(let i = 0; i < props.total.length;i++) {
        let currentValue = props.total[i]; 
         val+=currentValue;
       
    }
    
  return (
    <div> number of exercises {val} 

    </div>

  )
}
export default Total
