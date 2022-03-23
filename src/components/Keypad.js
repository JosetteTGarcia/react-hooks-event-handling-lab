// Code Keypad Component Here
import React from "React"

function Keypad(){

  return (
 <form onChange={() => console.log(`Entering password...`)} >
   <input type="password" 
   name ="password" 
   placeholder="Enter password..."/>
 </form>
  )
}

export default Keypad;