import React from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter initialValue={123} />
      <Counter initialValue={250} />
    </div>
  );
}

export default App;
