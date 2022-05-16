import React from 'react';
import './app.css';
// import Habit from './components/habit';
import Habits from './components/habits';

function App() {
  const name = '홍길동';
  return ( 
    <Habits />
  );
  // return <h1 className="클래스명" onClick="이벤트함수">Hello world!</h1>;
}

export default App;
