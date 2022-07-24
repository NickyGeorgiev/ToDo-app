import { createTodoFetch } from '../fetchService/createTodoFetch';
import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';

export const CreateTodo = () => {

    let navigate = useNavigate();

    useEffect(()=>{
        if(!localStorage.getItem('userId')){
            navigate('/login');
        }
    },[])

    const createNewTodo = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let todoData = {
            title: formData.get('title'),
            subtitle: formData.get('subtitle'),
            description: formData.get('description'),
            owner: localStorage.getItem('userId')
        }
        createTodoFetch(todoData);
        navigate('/')
    }

    return (
        <div className="create">Create Todo
            <form className="add-todo" onSubmit={createNewTodo}>
                <label htmlFor="title">ToDo Name *</label><br />
                <input type="text" id="title" name="title" required/><br />
                <label htmlFor="subtitle">ToDo Subtitle</label><br />
                <input type="text" id="subtitle" name="subtitle" /><br />
                <label htmlFor="subtitle">ToDo Description</label><br />
                <textarea type="textarea" id="description" name="description" /><br />
                <input className="submit" type="submit" value="Add new ToDo" />
            </form>
        </div>
    )
}