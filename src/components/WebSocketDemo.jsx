import { useCallback, useEffect, useState } from "react";

const socket = new WebSocket("ws://localhost:8080/ws");

const requestData = (message) => {
  return { message: message };
};

export const WebSocketDemo = () => {
  const [message, setMessage] = useState("");
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    socket.onopen = () => {
      setMessage("Connected");
    };

    socket.onmessage = (e) => {
      setMessage("Get message from server: " + e.data);
      console.log(JSON.parse(e.data));
    };

    return () => {
      socket.close();
    };
  }, []);

  const handleClick = useCallback(
    (e) => {
      e.preventDefault();

      // Added
      const value = requestData(inputValue);
      console.log(value);
      const valueJSON = JSON.stringify(value);
      console.log(valueJSON);

      socket.send(
        JSON.stringify(
          value
          //message: inputValue,
        )
      );
    },
    [inputValue]
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);

  return (
    <div className="teste">
      <input
        id="input"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleClick}>Send</button>
      <pre>{message}</pre>
    </div>
  );
};
