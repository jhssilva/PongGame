import { sendMessage } from "./Communication";
import { requestGameData } from "./Constants";

// Enum Keys available
const enumKeys = {
  Up: "ArrowUp",
  Down: "ArrowDown",
  W: "w",
  S: "s",
};

function logKey(e) {
  const { key } = e;

  // If the key isn't a valid Key, doesn't do anything.
  if (Object.values(enumKeys).indexOf(key) === -1) {
    return;
  }
  sendMessage(requestGameData(key));
  console.log(requestGameData(key));
}

const setKeyEventListener = () => {
  document.addEventListener("keydown", logKey);
};

export { setKeyEventListener };
