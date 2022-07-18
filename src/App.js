import { Route, Routes } from 'react-router-dom';
import './App.css';
import { ToDoContext } from './components/context/ToDoContext';
import { Header } from './components/header/Header';
import { MenuWrapper } from './components/MenuWrapper';
import { Login } from './components/header/Login'
import { Register } from './components/header/Register'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/todo/TodoList';

function App() {
    return (
        // <ToDoContext.Provider>
        <>
            <Header />
            <Routes>
                <Route path='/' element={<MenuWrapper />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                <Route path='/create' element={<CreateTodo />} />
                <Route path='/load' element={<TodoList />} />
            </Routes>
        </>
        // </ToDoContext.Provider>
    );
}

export default App;
