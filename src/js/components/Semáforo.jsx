import React, { useState, useEffect } from "react";

function Semáforo() {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const duración = {
      red: 3000,
      green: 3000,
      yellow: 3000,
    };

    const timer = setTimeout(() => {
      if (color === "red") setColor("green");
      else if (color === "green") setColor("yellow");
      else setColor("red");
    }, duración[color]);

    return () => clearTimeout(timer);
  }, [color]);

  const estiloLuz = (luz) => ({
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: luz === color ? luz : "gray",
    transition: "background-color 0.5s ease",
  });

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "black",
        padding: "20px",
        margin: "10px",
        borderRadius: "10px",
      }}
    >
      <div style={estiloLuz("red")}></div>
      <div style={estiloLuz("yellow")}></div>
      <div style={estiloLuz("green")}></div>
    </div>
  );
}

export default Semáforo;
