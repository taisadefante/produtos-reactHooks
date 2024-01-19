import React from "react";
import Produto from "./produto";

function App() {
  const [dados, setDados] = React.useState(null);

  function handleClick(event) {}

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      <Produto />
    </div>
  );
}

export default App;
