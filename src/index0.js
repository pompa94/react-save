import React from 'react';
import ReactDOM from 'react-dom/client';

import {BiBell} from 'react-icons/bi'
// 아이콘 사용방법 react icons검색

import './index.css'

function App(){
  return(
    <div>
      <h1>
        <BiBell />
         </h1>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
