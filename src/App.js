import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SingUp/SignUp';
import InvoiceForm from './components/InvoiceForm/InvoiceForm';
import './App.css';

const App = () => {
   return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/sign-up" element={<SignUp/>}/>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/invoice-form" element={<InvoiceForm/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;





 