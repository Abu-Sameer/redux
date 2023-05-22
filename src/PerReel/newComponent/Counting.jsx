import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, reset } from '../store/Counter';

export default function Counting() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.Counter.value);

  return (
    <div className="container-fluid mtop">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())} className="btn btn-primary">
        Increment
      </button>
      <button onClick={() => dispatch(reset())} className="btn btn-dark mx-3">
        Reset
      </button>
      <button onClick={() => dispatch(decrement())} className="btn btn-danger">
        Decrement
      </button>
    </div>
  );
}
