import React, { useState } from "react";

const Clock = () => {
  let ctime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(ctime);

  setInterval(() => {
    let ctime = new Date().toLocaleTimeString();
    setTime(ctime);
  }, 1000);

  return (
    <div>
      <div style={{ color: "red" }}>{time}</div>
    </div>
  );
};

export default Clock;
