import React, { useEffect } from 'react';

export default function UnloadExample(){

  useEffect(() => {

    return () => {
      console.log("I am unmounting, poof.")
    };

  }, [])

  return(
    <h2>Here I am, loaded - WHOOP.</h2>
  )
}