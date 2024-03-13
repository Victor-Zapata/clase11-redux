import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/slices/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./store/store";

function App() {
  const { value: counterValue } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <h1>Probando Redux + Typescript</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}> -1</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
      <h2>{counterValue}</h2>
    </>
  );
}

export default App;
