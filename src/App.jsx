// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import First from "./Components/First";
import Greetings from "./Components/Greetings";
import * as calc from "./Components/Calculator";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <First />
      <Greetings />
      {/* <Calculator/> */}
      <div className="container">
        <ul>
          <li>sum of two numbers is : {calc.add(20, 20)}</li>
          <li>subtraction of two numbers is :{calc.sub(20, 20)}</li>
          <li>division of two numbers is : {calc.divi(10, 3)}</li>
          <li>multiplication of two numbers is : {calc.mult(20, 20)}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
