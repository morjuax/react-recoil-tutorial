import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Display from './views/Display';

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="display" element={<Display/>} />
        <Route path='*' element={<div>Not found</div>}/>
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
