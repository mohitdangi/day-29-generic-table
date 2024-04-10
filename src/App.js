import React from 'react';
import TableGenerator from './TableGenerator'; // Import the TableGenerator component
import "./styles.css";

export default function App() {
  // Sample data
  const data = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ];

  return (
    <div className="App">
      <h1>Dynamic Table Generator</h1>
      <TableGenerator data={data} /> {/* Render the TableGenerator component */}
    </div>
  );
}
