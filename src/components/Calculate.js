import React, { useState } from "react";
import Buttons from "./Button";
import Input from "./Input";

export default function Calculate() {
  const [input1, setInput1] = useState(null);
  const [input2, setInput2] = useState(null);
  const [bmi, setBmi] = useState(" Enter the values");

  const handleChange1 = (e) => {
    setInput1(e.target.value);
    console.log(e.target.value);
  };
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };

  const onClick = () => {
    setBmi(input2 / (input1 * input1));
  };

  return (
    <div>
      <Input
        value={input1}
        parameter="Height (in meters)"
        onChange={handleChange1}
        type="Height"
      />
      <Input
        value={input2}
        parameter="Weight (in Kgs)"
        onChange={handleChange2}
        type="Weight"
      />
      <Buttons onclick={onClick} />
      <div id="output">
        <h2
          style={{
            margin: "20%",
            marginTop: "4%",
            borderRadius: "8px",
            backgroundColor: "grey",
            fontFamily: "monospace",
            textAlign: "center"
          }}
        >
          {" "}
          {bmi}
        </h2>
      </div>
    </div>
  );
}
