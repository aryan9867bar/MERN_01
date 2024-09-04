import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import React, { createContext, useReducer} from "react";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Signup from './components/Signup';
import Logout from './components/Logout';
import { Routes, Route } from 'react-router-dom';
import ErrorPage from "./components/Errorpage";
import { initialState, reducer } from '../src/reducer/UseReducer';


export const UserContext = createContext();

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar/>
      <Routes>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/logout" element={<Logout/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
