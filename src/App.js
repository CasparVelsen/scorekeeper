import Input from "./components/Input";
import Button from "./components/Button";
import Player from "./components/Player";

import "./App.css";

function App() {
  return (
    <main className="App">
      <Input
        title={"Type in your name:"}
        placeholder={"e.g. Max Mustermann"}
        isDark={false}
      />
      <Input
        title={"Name your game:"}
        placeholder={"e.g. Siedler von Catan"}
        isDark={true}
      />
      <div>
        <Button children={"start Game"} isDark={false} />
        <Button children={"History"} isDark={true} />
      </div>
    </main>
  );
}

export default App;
