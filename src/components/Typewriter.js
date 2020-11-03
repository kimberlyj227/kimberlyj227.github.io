import React from "react";
import Typewriter from 'typewriter-effect';
 

 const Type = () => {
   return (
    <Typewriter options={{loop: true}}
      onInit={(typewriter) => {
        typewriter.typeString('HELLO!')
          .callFunction(() => {
            console.log('String typed out!');
          })
          .pauseFor(2500)
          .deleteAll()
          .typeString("I LOVE TO CODE")
          .pauseFor(2500)
          .deleteChars(4)
          .typeString("CREATE")
          .pauseFor(2500)
          .deleteChars(6)
          .typeString("COLLABORATE")
          .pauseFor(2500)
          .deleteAll()
          .callFunction(() => {
            console.log('All strings were deleted');
          })
          .start();
      }}
    />

   )
 }

 export default Type;