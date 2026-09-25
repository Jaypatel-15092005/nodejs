import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FunctionComponent from "./components/FunctionComponent";
import StudentComponents from './components/StudentComponents';
import Counter from './components/Counter';
import StateRef from './components/StateRef';
import DigitalClock from './components/DigitalClock';
import ManualValidation from './components/ManualValidation';
import LibraryValidation from "./components/LibraryValidation";
import Employees from "./components/Employees";
function Home() {

    return (
        <div className="text-center mt-5">
            <h1>React Practical - Question 2</h1>
            <p> Welcome to Question 2</p>
        </div>
    );
}


function App() {
    return (
        <BrowserRouter>
            <div className="container mt-4">
                <h2>React Practical</h2>
                {/* Navigation Links */}
                <div className="mt-3">
                    <Link to="/" className="btn btn-primary me-2"> Home | </Link>
                    <Link to="/function" className="btn btn-success">Function Component | </Link>
                    <Link to="/students" className="btn btn-warning me-2"> Student Components | </Link>
                    <Link to="/counter" className="btn btn-warning me-2"> Counter Components | </Link>
                    <Link to="/state-ref" className="btn btn-dark"> useState & useRef | </Link>
                    <Link to="/DigitalClock" className="btn btn-dark"> Digitalclock | </Link>
                    <Link to="/ManualValidation" className="btn btn-dark">ManualValidation | </Link>
                    <Link to="/library-validation" className="btn btn-success me-2"> Library Validation |</Link>
                    <Link to="/employees" className="btn btn-primary me-2">Employees</Link>
                </div>
                {/* Routes */}
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/function" element={<FunctionComponent />}/>
                    <Route path="/students" element={<StudentComponents />}/>
                    <Route path="/counter" element={<Counter />}/>
                    <Route path="/state-ref" element={<StateRef />}/>
                    <Route path="/DigitalClock" element={<DigitalClock/>}/>
                    <Route path="/ManualValidation" element={<ManualValidation/>}/>
                    <Route path="/library-validation" element={<LibraryValidation title="Registration Form - Third Party Validation"/>}/>
                    <Route path="/employees" element={<Employees />}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
}
export default App
