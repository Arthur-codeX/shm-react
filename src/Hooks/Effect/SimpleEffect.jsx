// ANGULAR-> LIFE CYCLE HOOK

import { useEffect, useState } from "react";

function SimpleEffect() {
  // useEffect(function,[dependency])
  // useEffect(function)-> without dependency
  // useEffect(function,[])-> it will run only once
  // useEffect(function,[radius])-> initially when component is mounte and when radius

  const [n, setN] = useState(0);

  // Whenever state change occurs
  // It triggures a rerender of the component
  // if the useEffect does not have dependency it will rerender
  useEffect(() => {
    console.log("useEffect has run");
  });

  return (
    <div>
      <h1>Simple Effect</h1>
      <div>
        <button
          onClick={() => {
            setN(n - 1);
          }}
        >
          -
        </button>
        <span>{n}</span>
        <button
          onClick={() => {
            setN(n + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SimpleEffect;
