import React from "react";
import Greeting from "./Greeting";

function App() {
  return (
    <>
      <form>
        <label htmlFor="name">Enter name:</label>
      </form>
      <Greeting greeting="" />
    </>
  );
}

export default App;
