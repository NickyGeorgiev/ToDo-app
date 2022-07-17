import './App.css';
import { ToDoContext } from './components/context/ToDoContext';
import { InitialTodo } from './components/forms/InitialTodo';
import { Menu } from './components/Menu';
import { ToDoWrapper } from './components/ToDoWrapper';

function App() {
    return (
        <ToDoContext.Provider>
            <Menu />
            <InitialTodo />
            <ToDoWrapper />
        </ToDoContext.Provider>
    );
}

export default App;
