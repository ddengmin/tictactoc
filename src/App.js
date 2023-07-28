import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">game-info</div>
    </div>
  );
}

//app을 가상돔으로 적용 및 바꾸기

export default App;
