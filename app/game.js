import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const image = require("../assets/ticTacToeBackground.jpg");

function Square({ value, onSquareClick }) {
  return (
    <TouchableOpacity style={styles.square} onPress={onSquareClick}>
      <Text style={styles.squareText}>{value}</Text>
    </TouchableOpacity>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  return (
    <View style={styles.board}>
      {[0, 3, 6].map((rowStart) => (
        <View key={rowStart} style={styles.boardRow}>
          {[0, 1, 2].map((offset) => {
            const i = rowStart + offset;
            return (
              <Square
                key={i}
                value={squares[i]}
                onSquareClick={() => handleClick(i)}
              />
            );
          })}
        </View>
      ))}
    </View>
  );
}

export default function Home() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  const winner = calculateWinner(squares);
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <ImageBackground source={image} style={styles.game}>
      <Text style={styles.status}>{status}</Text>
      <Board xIsNext={xIsNext} squares={squares} onPlay={handlePlay} />
      <TouchableOpacity style={styles.resetButton} onPress={handleReset}>
        <Text style={styles.resetButtonText}>Reset Game</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const styles = StyleSheet.create({
  game: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  board: {
    alignItems: "center",
    backgroundColor: "orange",
    padding: 20,
    borderRadius: 10,
  },
  boardRow: {
    flexDirection: "row",
  },
  square: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
    margin: 5,
    backgroundColor: "#fff",
  },
  squareText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  status: {
    fontSize: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: "black",
    padding: 10,
    borderRadius: 5,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#50ADFF",
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 18,
    color: "#fff",
  },
});
