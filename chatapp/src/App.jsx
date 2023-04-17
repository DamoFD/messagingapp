import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import LogIn from './pages/login/LogIn';
import SignUp from './pages/login/SignUp';
import PrivateRoutes from './components/PrivateRoutes';
import UserContext from './components/AccountContext';
import Chat from './pages/Chat';
import socket from "./util/socket";
import './App.css'

function App() {
    socket.connect();
    return (
        <BrowserRouter>
        <UserContext>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/SignUp' element={<SignUp />} />
                <Route element={<PrivateRoutes />}>
                <Route path='/chat' element={<Chat />} />
                </Route>
            </Routes>
            </UserContext>
        </BrowserRouter>
    )
}

export default App;