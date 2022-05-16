import React from 'react';              // 리액트를 import
import ReactDOM from 'react-dom/client';   // 리액트DOM을 import
// import ReactDOM from 'react-dom';       // 리액트DOM을 import (18버전 미만)

import './index.css';
import App from './app';                  // 동위 디렉토리에서 app.jsx를 <App />에 넣어준다
import '@fortawesome/fontawesome-free/js/all.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // (엄격모드) 생략 가능!
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// ReactDOM은 상태에 따라 랜더링해준다 ( 18버전 미만)
// ReactDOM.render(
//   // ./app에서 임포트해온 App을
//   // (엄격모드) 생략 가능!
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   // root라는 Id를 가진 요소에
//   document.getElementById('root')
// );

