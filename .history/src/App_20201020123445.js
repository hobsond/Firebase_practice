import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

cp

function App() {
  const [input, setInput] = useState("");
  const [returned, setReturned] = useState("nothing yet");
  const try_sum_url =
    "https://console.firebase.google.com/project/streamline-4ea7b/overview";

  const try_sum = (e) => {
    e.preventDefault();
    axios
      .post(try_sum_url, input)
      .then((res) => setReturned(res))
      .catch((err) => console.log(err));
  };

  const inChange = () => {
    setInput(input);
  };
  return (
    <div className="App">
      <h3>{returned}</h3>
      <input onChange={inChange} placeholder="try sum\n fuck it fuck it up" />
      <button onClick={try_sum}>Send</button>
    </div>
  );
}

export default App;
