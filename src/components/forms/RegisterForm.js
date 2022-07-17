export const RegisterForm = () => {
    return (
        <form className="register">
            <label htmlFor="email">Email</label><br />
            <input type="text" id="email" name="email" /><br />
            <label htmlFor="password">Password</label><br />
            <input type="password" id="password" name="password" /><br />
            <label htmlFor="re-pass">Repeat password</label><br />
            <input type="password" id="re-pass" name="re-pass" /><br />
            <input className="submit" type="submit" value="Register!" />
        </form>
    )
}