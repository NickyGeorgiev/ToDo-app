import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../fetchService/loginUser";

export const Login = ({ getUserData }) => {

    let navigate = useNavigate();

    const onLogin = (e) => {
        e.preventDefault();

        let formData = new FormData(e.target);

        let clientData = {
            email: formData.get('email'),
            password: formData.get('password'),
        }
        loginUser(clientData, getUserData);
        navigate('/');
    }

    return (
        <div className="login-page">Login
            <form className="login" onSubmit={onLogin}>
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" name="email" required/><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" required/><br />
                <input className="submit" type="submit" value="Login!" />
            </form>
        </div>
    )
}
