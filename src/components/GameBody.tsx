import { useCallback, useMemo, useState } from "react";

type Cell = "X" | "O" | null;

function checkWinner(squares: Cell[]): Cell | "draw" | null {
  const lines: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  if (squares.every(Boolean)) return "draw";
  return null;
}

export function GameBody() {
  const [squares, setSquares] = useState<Cell[]>(() => Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = useMemo(() => checkWinner(squares), [squares]);

  const status = useMemo(() => {
    if (winner === "draw") return "It's a draw.";
    if (winner) return `Player ${winner} wins!`;
    return `Next: ${xIsNext ? "X" : "O"}`;
  }, [winner, xIsNext]);

  const play = useCallback(
    (i: number) => {
      if (squares[i] || winner != null) return;
      const next = [...squares];
      next[i] = xIsNext ? "X" : "O";
      const outcome = checkWinner(next);
      setSquares(next);
      if (outcome == null) setXIsNext((v) => !v);
    },
    [squares, xIsNext, winner]
  );

  const reset = useCallback(() => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }, []);

  return (
    <div className="game-app">
      <p className="game-app-status" role="status">
        {status}
      </p>
      <div className="game-board" role="grid" aria-label="Tic-tac-toe board">
        {squares.map((cell, i) => (
          <button
            key={i}
            type="button"
            className="game-cell"
            onClick={() => play(i)}
            aria-label={cell ? `Cell ${i + 1}, ${cell}` : `Cell ${i + 1}, empty`}
          >
            {cell ?? ""}
          </button>
        ))}
      </div>
      <button type="button" className="game-reset" onClick={reset}>
        New game
      </button>
    </div>
  );
}
