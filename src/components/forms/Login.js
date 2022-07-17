export const Login = () => {
    return (
        <form className="login">
        <label htmlFor="email">Email</label><br />
        <input type="text" id="email" name="email" /><br />
        <label htmlFor="password">Password</label><br />
        <input type="password" id="password" name="password" /><br />
        <input className="submit" type="submit" value="Login!" />
    </form>
    )
}