import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css';

import FirstCom from './components/firstcom';
import SecondCom from './components/secondcom';

function App() {

    return (
        <div>

            <h1>Question 1</h1>

            <FirstCom />

            <SecondCom />

        </div>
    );
}

export default App;