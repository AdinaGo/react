import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Post from "./components/Post";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Post author="Adina Gordon" content="This is the content of my post." />
      <Post author="Ayala Levi" content="This is another post." />
      <Post author="David Cohen" content="This is yet another post." />
    </>
  );
}

export default App;
