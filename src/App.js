import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://node-api1-1jqu.onrender.com")
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Hello from React + Node API </h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
