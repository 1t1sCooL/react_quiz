import {useState} from 'react';
import './index.scss';
import { NavLink, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  return (<>
    <div className="nav-app">
      <h1>Выберите тест:</h1>
      <NavLink className="nav-link" to='/JavaScriptQuiz'>JavaScript</NavLink>
      <NavLink className="nav-link" to='/HTMLQuiz'>HTML</NavLink>
      <NavLink className="nav-link" to='/ReactQuiz'>React</NavLink>
      <NavLink className="nav-link" to='/CSSQuiz'>CSS</NavLink>
      
    </div>
    <button className='back' onClick={()=>window.history.back()}>Назад</button>
    </>
  );
}

export default App;

