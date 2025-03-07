import React, { useReducer } from "react";

function counterReducer(state, action) {
  if (action === "INCREMENT") {
    return {
      value: state.value + 1,
      history: [...state.history, state.value + 1], 
    };
  } else if (action === "DECREMENT") {
    return {
      value: state.value - 1,
      history: [...state.history, state.value - 1],
    };
  }
  return state;
}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, {
    value: 0,
    history: [0],
  });

  return (
    <div>
      <h1>{state.value}</h1>
      <button onClick={() => dispatch("INCREMENT")}>INCREMENT</button>
      <button onClick={() => dispatch("DECREMENT")}>DECREMENT</button>
      <div>История изменений: {state.history.join(", ")}</div>{" "}
    </div>
  );
};

export default Counter;
