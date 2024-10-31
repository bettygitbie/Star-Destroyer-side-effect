import React, { useState, useEffect, useRef } from "react";
import Star from "./Star";
import { v4 as uuid } from "uuid";

function Space() {
  const [showStars, setShowStars] = useState([]);
  let STAR_SIZE = 50;

  //commented to stop the interval from running. 

//   useEffect(() => {
//     console.log("Effect");
//     const timerId = setInterval(() => {
//       setShowStars((showStars) => [
//         ...showStars,
//         {
//           id: uuid(),
//           x: Math.random() * (window.innerWidth - STAR_SIZE),
//           y: Math.random() * (window.innerHeight - STAR_SIZE),
//         },
//       ]);
//     }, 2500);
//     console.log(showStars);

//     return () => clearInterval(timerId);
//   }, []);

  const handleDestroy = (id) => {
    setShowStars(showStars.filter((star) => star.id !== id));
  };

  return (
    <div>
      {showStars.map(({ id, x, y }) => (
        <Star key={id} id={id} x={x} y={y} destroyStar={handleDestroy} />
      ))}
    </div>
  );
}

export default Space;
