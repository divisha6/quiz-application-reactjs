import React from 'react'
import ReactDOM from 'react-dom'
import Quiz from './components/Quiz'
import Navbar from './components/Navbar';
import Home from './components/Home';
import IntroPage from './components/IntroPage';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

import './styles.css';
import { QuizData } from './components/QuizData';

function App() {
    return (
        <div className="App">
            <BrowserRouter >
            <Navbar />
            
            <Routes>
            <Route path= "/" element = {<IntroPage/>} />
                <Route path= "/home" element = {<Home/>} />
                <Route path= "/quiz" element = {<Quiz/>} />
            </Routes>
            </BrowserRouter>
        </div>
    )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App></App>, rootElement) 
