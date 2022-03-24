import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import { atom, RecoilRoot, useRecoilState } from 'recoil';
import { counter } from './state/atoms';
import Display from './views/Display';
import { Link } from 'react-router-dom';


function App() {
  const [number, setNumber] = useRecoilState(counter);
  return (
    <Fragment>
      <h1>Recoil Demo</h1>
      <button onClick={() => setNumber(number + 1)}>{number}</button>
      <Display/>
      <Link to='display'>d</Link>
    </Fragment>
  );
}

export default App;
