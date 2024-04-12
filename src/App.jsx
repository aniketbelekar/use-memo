import React, { useState, useMemo } from 'react';

function SimpleComponent({ a, b }) {
 
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return a + b;
  }, [a, b]);

  return <div>The sum of {a} and {b} is {sum}</div>;
}

function App() {
  const [valueA, setValueA] = useState(1);
  const [valueB, setValueB] = useState(2);

  return (
    <div>
      <input
        type="number"
        value={valueA}
        onChange={(e) => setValueA(parseInt(e.target.value))}
      />
      <input
        type="number"
        value={valueB}
        onChange={(e) => setValueB(parseInt(e.target.value))}
      />
      <SimpleComponent a={valueA} b={valueB} />
    </div>
  );
}

export default App;
