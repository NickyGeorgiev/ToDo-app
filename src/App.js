import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToDoContext } from './components/context/ToDoContext';
import { Header } from './components/header/Header';
import { MenuWrapper } from './components/MenuWrapper';
import { Login } from './components/header/Login'
import { Register } from './components/header/Register'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/todo/TodoList';
import {Page404} from './components/Page404'
import {loginUser} from './components/fetchService/loginUser'
import { useState } from 'react';

function App() {

    let [userData, setUserData] = useState()

    const getUserData = (data) => {
        setUserData(data)
    }

    return (
        <ToDoContext.Provider value={userData}>
            <Header />
            <Routes>
                <Route path='/' element={<MenuWrapper />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login getUserData={getUserData}/>} />
                <Route path='/create' element={<CreateTodo />} />
                <Route path='/load' element={<TodoList />} />
                <Route path='*' element={<Page404 />} />
            </Routes>
        </ToDoContext.Provider>
    );
}

export default App;
