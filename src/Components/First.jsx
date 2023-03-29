import React from "react";

function First() {
  var currentdate = new Date().toLocaleDateString();
  var currentTime = new Date().toLocaleTimeString();

  return (
    <div className="container text-center my-5">
      <h2>Hello My Name is: Masam Abbas</h2>
      <p>Current Date is : {currentdate}</p>
      <p>Current Time is : {currentTime}</p>
    </div>
  );
}

export default First;
