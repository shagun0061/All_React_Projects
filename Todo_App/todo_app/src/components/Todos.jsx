import React, { useState } from "react";
import "./Todos.css";
const Todos = () => {
  const [arr, setArr] = useState([]);
  const [val, setVlaue] = useState("");

  let changeEvent = (event) => {
    event.preventDefault();
    setVlaue(event.target.value);
  };

  let AddTODO = () => {
    let obj = {
      id: Math.random(),
      title: val,
      status: false,
    };
    setArr([...arr, obj]);
  };

  let togal = (id) => {
    let newarr = arr.map((ele) => {
      if (ele.id !== id) {
        return ele;
      } else {
        return {
          ...ele,
          status: !ele.status,
        };
      }
    });
    setArr(newarr);
  };

  let delet = (id) => {
    let newar = arr.filter((ele) => {
      if (ele.id !== id) {
        return ele;
      }
    });
    setArr(newar);
  };
  return (
    <div className="main">
      <div className="main_heading"> Todos</div>
      <input
        className="in"
        name="todo"
        onChange={changeEvent}
        placeholder="Add_Todo"
      />
      <button className="but" onClick={AddTODO}>
        ADD
      </button>
      <div>
        {arr.map((ele) => (
          <div className="append">
            <p>{ele.title}</p>

            <p style={ele.status ? {color:"green"} : {color:"red"}} className="p1" onClick={() => togal(ele.id)}>
              {ele.status ? "Complete" : "Pending"}
            </p>
            <p className="p2" onClick={() => delet(ele.id)}>
              {"del"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Todos;
