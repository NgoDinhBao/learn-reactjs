import logo from "./logo.svg";
import "./App.css";
import React from "react";

function App() {
  const name = "Bao";
  const age = 29;
  const isMale = true;
  const student = {
    name: "Easy Frontend",
  };
  const colorList = ["red", "yellow", "green"];
  //{true/false} {null} {undefined} ko render
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Ngo Bao</p>
        <p>
          xin chao {name} - {age} {isMale ? "Male" : "Female"}
        </p>
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {isMale && (
          <div>
            <p> Male 1</p>
            <p> Male 2</p>
            <p> Male 3</p>
          </div>
        )}
        {isMale && (
          <React.Fragment>
            <p> Male 1</p>
            <p> Male 2</p>
            <p> Male 3</p>
          </React.Fragment>
        )}
        {isMale && (
          <>
            <p> Male 1</p>
            <p> Male 2</p>
            <p> Male 3</p>
          </>
        )}

        <p>{student.name}</p>

        <ul>
          {colorList.map(color =>(
            <li key={color} style={{color}}>{color}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
