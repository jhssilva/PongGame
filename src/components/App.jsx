import React, { useState } from "react";
import "./App.css";
import Game from "./Game/Game";
import { JoinGame } from "./Utils/Communication";
import { initializeApp } from "firebase/app";

function App() {
  const [isGame, setIsGame] = useState(false);
  const [errorConnecting, setErrorConnecting] = useState(false);

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBuh8ap8DV-BJD_FUc_JGk1PQ-GhJ8qWkY",
    authDomain: "ponggame-23dd4.firebaseapp.com",
    projectId: "ponggame-23dd4",
    storageBucket: "ponggame-23dd4.appspot.com",
    messagingSenderId: "252832756476",
    appId: "1:252832756476:web:bc1b79367d6f190d239d79",
  };
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const handleJoinGame = (isSuccessful) => {
    setIsGame(isSuccessful);
    setErrorConnecting(!isSuccessful);
  };

  const StateApp = (props) => {
    if (isGame) {
      return <Game />;
    } else {
      if (errorConnecting) {
        return <h1>Error while connecting to the server.</h1>;
      } else {
        JoinGame(handleJoinGame);
        return <h1>Joining the game....</h1>;
      }
    }
  };

  return (
    <div className="App">
      <StateApp />
    </div>
  );
}

export default App;
