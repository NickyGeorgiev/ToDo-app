export const InitialTodo = () => {
    return (
        <>
            <div>ADD ToDo</div>
            <form className="add-todo">
                <label htmlFor="title">ToDo Name *</label><br />
                <input type="text" id="title" name="title" /><br />
                <label htmlFor="subtitle">ToDo Subtitle</label><br />
                <input type="text" id="subtitle" name="subtitle" /><br />
                <label htmlFor="subtitle">ToDo Description</label><br />
                <textarea type="textarea" id="description" name="description" /><br />
                <input className="submit" type="submit" value="Add new ToDo" />
            </form>
        </>
    )
}