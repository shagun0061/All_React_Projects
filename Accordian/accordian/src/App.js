import React, { useState } from "react";
import "./App.css";
import { data } from "./api.js";
function App() {
  const [to, setTo] = useState(0);

  let run = (id) => {
    if (id === to) {
      setTo(0);
    } else {
      setTo(id);
    }
  };

  return (
    <div className="App">
      <h1>Accordian</h1>
      {data.map((ele) => (
        <div key={ele.id}>
          <div className="in">
            <p className="in2" onClick={() => run(ele.id)}>
              ➕
            </p>
            <h1>{ele.question}</h1>
          </div>
          {ele.id == to && <h3>{ele.answers}</h3>} :
        </div>
      ))}
    </div>
  );
}

export default App;
