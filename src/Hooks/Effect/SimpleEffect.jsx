// ANGULAR-> LIFE CYCLE HOOK

import { useEffect } from "react";

function SimpleEffect() {
  // useEffect(function,[dependency])
  // useEffect(function)-> without dependency
  // useEffect(function,[])-> it will run only once
  // useEffect(function,[radius])-> initially when component is mounte and when radius

  useEffect(() => {
    console.log("useEffect has run");
  });

  return (
    <div>
      <h1>Simple Effect</h1>
    </div>
  );
}

export default SimpleEffect;
