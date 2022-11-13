import React, { useEffect, useState } from "react";
import "./Expenses.css";
const Expensis = () => {
  const [titel, setTitel] = useState("");
  const [price, setPrice] = useState();
  const [date, setdate] = useState("");

  const [arr, setArr] = useState([]);

  let Handelchange = (event) => {
    setTitel(event.target.value);
  };
  let Handelchange_price = (event) => {
    setPrice(event.target.value);
  };

  let Handelchange_date = (event) => {
    setdate(event.target.value);
  };

  let getdata = async (url) => {
    let data = await fetch(url);
    let res = await data.json();
    setArr(res);
  };

  useEffect(() => {
    getdata("http://localhost:8080/data");
  }, [getdata]);

  let handelsubmit = (event) => {
    event.preventDefault();
    let newdatas = {
      titel: titel,
      date: date,
      price: price,
    };

    fetch("http://localhost:8080/data", {
      method: "POST",
      body: JSON.stringify(newdatas),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    getdata("http://localhost:8080/data");
    setPrice("");
    setTitel("");
    setdate("");
  };

  let del = (es) => {
    fetch(`http://localhost:8080/data/${es}`, {
      method: "DELETE",
    });
    getdata("http://localhost:8080/data");

  };

  return (
    <div>
      <form onSubmit={handelsubmit}>
        <input onChange={Handelchange} value={titel} placeholder="Add Title" />
        <br></br>
        <input
          value={price}
          onChange={Handelchange_price}
          type="number"
          placeholder="Add Price$"
        />
        <br></br>
        <input
          value={date}
          onChange={Handelchange_date}
          type="date"
          placeholder="Add Date"
        />
        <br></br>

        <button type="submit">Add</button>
      </form>
      <div className="main">
        {arr.map((ele) => (
          <div className="show_items" key={ele.id}>
            <div>{ele.titel}</div>
            <div>{ele.date}</div>
            <div>{ele.price}$</div>
            <button
              onClick={() => {
                del(ele.id);
              }}
            >
              del
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Expensis;
