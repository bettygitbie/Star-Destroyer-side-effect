import React, { useRef, useEffect } from "react";

function Star({ x, y, id, destroyStar }) {
  const star = useRef();

  useEffect(() => {
    const currentStar = star.current;
    currentStar.focus();
  }, []);

  return (
    <div
      ref={star}
      tabIndex="0"
      onClick={() => destroyStar(id)}
      style={{ position: "absolute", left: x, top: y, cursor: "pointer" }}
      className="Star"
    >
      ❤️‍🔥
    </div>
  );
}

export default Star;
