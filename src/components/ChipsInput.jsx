import React, { useState } from "react";

const ChipsInput = () => {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      // Logic to add chips
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDeleteChip = (index) => {
    // Remove value on index from chips array
    const copyChips = [...chips];
    copyChips.splice(index, 1);
    setChips(copyChips);

    // Using Filter
    // setChips(
    //   chips.filter((chipItem) => chipItem != chips[index])
    // )
    // console.log(chips[index])
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "40px 0",
      }}
    >
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip"
        style={{ border: "2px solid black", padding: "8px", width: "200px" }}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      <div style={{ display: "flex" }}>
        {chips.map((chip, index) => (
          <div
            style={{
              color: "white",
              backgroundColor: "black",
              margin: "10px",
              padding: "8px",
            }}
            key={index}
          >
            {chip}
            <button
              style={{
                color: "white",
                backgroundColor: "black",
                cursor: "pointer",
                border: "none",
              }}
              onClick={() => handleDeleteChip(index)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChipsInput;
