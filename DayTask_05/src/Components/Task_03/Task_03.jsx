import React from "react";
import "./Task_03.css";
import data from "./data.json";
const Task_03 = () => {
  console.log("data:", data);
  return (
    <div>
      <div>
        <h1>Fetch the data as card</h1>
      </div>
      <div>
        {data.map((x) => (
          <div className="fixed">
            <div className="main">
              <h1>Id:{x.id}</h1>
              <h2>Title:{x.title}</h2>
              <img src={x.image} alt="" />
              <p>
                <b>Description:</b>
                {x.description}
              </p>
              <p>
                <b>Price:</b>
                {x.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Task_03;
