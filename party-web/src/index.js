import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './routes/login';
import Home from './routes/home';
import Parties from './routes/parties';
import Signup from './routes/signup';
import SideNav from './components/sidenav';
import "./index.css";

function router(isLoggedIn, loginCallback, logoutCallback) {
  return <BrowserRouter>
     { isLoggedIn ? (
    <div id="top-level-container">
      <SideNav></SideNav>
      <Routes>
        <Route path="/" element={ <Home logoutCallback={ logoutCallback }/> }/>
        <Route path="/parties" element={ <Parties /> }/>
        <Route path="/*" element={ <Navigate to={"/"}/> }/>
      </Routes>
    </div>
  ) : (
    <Routes>
      <Route path="/*" element={ <Navigate to={"/login"}/> }/>
      <Route path="/login" element={ <Login loginCallback={ loginCallback }/> }/>
      <Route path="/signup" element={ <Signup loginCallback={ loginCallback }/> }/>
    </Routes>
  ) }
  </BrowserRouter>
}

function App() {
  const [sessionToken, setSessionToken] = useState(localStorage.getItem("sessionToken"));

  return <div id="main">
    { router(sessionToken, (token) => { setSessionToken(token) }, () => setSessionToken(null)) }
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
