import './App.css';
import { Route, Routes } from 'react-router-dom';
import { UserDataContext } from './components/context/UserDataContext';
import { ToDoContext } from './components/context/ToDoContext'
import { Header } from './components/header/Header';
import { MenuWrapper } from './components/MenuWrapper';
import { Login } from './components/header/Login'
import { Register } from './components/header/Register'
import { CreateTodo } from './components/todo/CreateTodo'
import { TodoList } from './components/todo/TodoList';
import { Page404 } from './components/Page404'
import { useEffect, useState } from 'react';
import { getTodo } from './components/fetchService/getTodo';

function App() {

    let [userData, setUserData] = useState();
    let [todoData, setTodoData] = useState();
    let userId = sessionStorage.getItem('userId');

    useEffect(() => {
        if (userId !== undefined) {
            getTodo(userId, getTodoData);
        }
    },[userData])

    const getUserData = (data) => {
        setUserData(data)
    }

    const getTodoData = (data) => {
        setTodoData(data)
    }

    return (
        <UserDataContext.Provider value={userData}>
            <ToDoContext.Provider value={todoData}>
                <Header />
                <Routes>
                    <Route path='/' element={<MenuWrapper />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/login' element={<Login getUserData={getUserData} />} />
                    <Route path='/create' element={<CreateTodo />} />
                    <Route path='/load' element={<TodoList />} />
                    <Route path='*' element={<Page404 />} />
                </Routes>
            </ToDoContext.Provider>
        </UserDataContext.Provider>
    );
}

export default App;
