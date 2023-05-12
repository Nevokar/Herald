import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
