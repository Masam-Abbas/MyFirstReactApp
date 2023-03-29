import React from 'react'
import './Greetings.css'

function Greetings() {
    
  let curDate = new Date(2023,2,5, 20);
  curDate = curDate.getHours();
  let greeting = " ";

  const cssColor = {}

  if (curDate >= 1 && curDate < 12) {
    greeting = "Good Morning";
    cssColor.color = 'green';
  } else if (curDate >= 12 && curDate <= 19) {
    greeting = "Good Afternoon";
    cssColor.color = 'gray';
  } else {
    greeting = "Good Night";
    cssColor.color = 'brown';
  }
  return (
    <div className="container text-center my-5">
        <div className="h1">
          <h1 className="heading">Hello Sir, <span style={cssColor}>{greeting}</span>  </h1>
        </div>
      </div>
  )
}

export default Greetings
