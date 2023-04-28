import React from "react";
import Card, { CardVariant } from "./components/card";

function App() {
  return (
    <div>
      <Card
        onClick={(num) => console.log("click", num)}
        width="100px"
        height="100px"
        variant={CardVariant.primary}
      >
        <button>Click</button>
      </Card>
    </div>
  );
}

export default App;
