import { useState, useEffect } from "react";
import "./style.css";

export default function RandomColorGenerator() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#222");

  const generateRandomColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateRandomColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateRandomColor(hex.length)];
    }

    const r = generateRandomColor(256);
    const g = generateRandomColor(256);
    const b = generateRandomColor(256);

    typeOfColor === "hex"
      ? setColor(hexColor)
      : setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    handleGenerateRandomColor();
  }, [typeOfColor]);

  return (
    <div className="container">
      <div className="button-wrapper">
        {typeOfColor === "hex" ? (
          <button
            onClick={() => {
              setTypeOfColor("rgb");
            }}
          >
            Create {typeOfColor} color
          </button>
        ) : (
          <button
            onClick={() => {
              setTypeOfColor("hex");
            }}
          >
            Create {typeOfColor} color
          </button>
        )}
        <button
          onClick={() => {
            handleGenerateRandomColor();
          }}
        >
          Generate Random color
        </button>
      </div>

      <div className="display">
        <div
          className="box"
          style={{
            background: color,
          }}
        >
          <h2>
            {typeOfColor === "hex"
              ? `HEX format color : `
              : `RGB format color : `}
          </h2>
          <h2>{color}</h2>
        </div>
      </div>
    </div>
  );
}
