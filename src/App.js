import './App.css';
import { ToDoContext } from './components/context/ToDoContext';
import { InitialTodo } from './components/createToDo/InitialTodo';
import { ToDoWrapper } from './components/ToDoWrapper';

function App() {
    return (
        <ToDoContext.Provider>
            <InitialTodo />
            <ToDoWrapper />
        </ToDoContext.Provider>
    );
}

export default App;
