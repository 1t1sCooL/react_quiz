import React,{ StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes} from 'react-router'
import ReactQuiz from './ReactQuiz'
import JavaScriptQuiz from './JavaScriptQuiz'
import HTMLQuiz from './HTMLQuiz'
import CSSQuiz from './CSSQuiz'
import App from './App'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/ReactQuiz' element={<ReactQuiz />}/>
      <Route path='/JavaScriptQuiz' element={<JavaScriptQuiz />}/>
      <Route path='/HTMLQuiz' element={<HTMLQuiz />}/>
      <Route path='/CSSQuiz' element={<CSSQuiz />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
