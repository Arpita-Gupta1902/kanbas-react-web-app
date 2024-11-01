import React, { useState } from "react";

export default function ArrayStateVariable() {
  const [array, setArray] = useState([1, 2, 3, 4, 5]);

  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };

  const deleteElement = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  return (
    <div id="wd-array-state-variables">
      <h2>Array State Variable</h2>
      <button
        onClick={addElement}
        style={{
          backgroundColor: "green",
          color: "white",
          alignItems: "center",
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          marginBottom: "10px",
          cursor: "pointer"
        }}
      >
        Add Element
      </button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {array.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px",
              border: "1px solid #ccc",
            }}
          >
            <span style={{ flex: 1 }}>{item}</span>
            <button className="btn btn-danger"
              onClick={() => deleteElement(index)}
              id="wd-delete-element-click"
              style={{
                color: "white",
                border: "none",
                padding: "5px 10px",
                borderRadius: "5px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <hr />
    </div>
  );
}
