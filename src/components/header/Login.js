export const Login = () => {

    const onLogin = (e) =>{
        e.preventDefault();

        let formData = new FormData(e.target);

    }
    return (
        <form className="login" onSubmit={onLogin}>
        <label htmlFor="email">Email</label><br />
        <input type="text" id="email" name="email" /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" /><br />
        <input className="submit" type="submit" value="Login!" />
    </form>
    )
}