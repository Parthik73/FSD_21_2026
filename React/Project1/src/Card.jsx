import React from "react";

const Card = () => {
  return (
    <div>
      <div
        style={{
          border: "2px solid red",
          width: "300px",
        }}
      >
        <h1>My Car</h1>
        <p>
          <img
            src="https://t3.ftcdn.net/jpg/13/39/20/70/360_F_1339207070_NHqLM5ow1ctVwO1oH26Kkfc06hZMY7un.jpg"
            height={"100px"}
            width={"100px"}
          ></img>
        </p>
        <h2>Car Name: WagonR</h2>
      </div>
    </div>
  );
};

export default Card;
