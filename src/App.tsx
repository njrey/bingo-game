import { BingoGame } from "./bingo-game-board/BingoGame";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 data-testid="app-header">Bingo</h1>
      <BingoGame />
    </div>
  );
}
export default App;
