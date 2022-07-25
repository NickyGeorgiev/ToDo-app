import { useNavigate } from "react-router-dom";
import { registerUser } from "../fetchService/registerUser";

export const Register = () => {

    let navigate = useNavigate();

    const onRegister = (e) => {
        e.preventDefault();
        if (e.target[1].value !== e.target[2].value) {
            alert('Both passwords must be same!');
        } else {
            let formData = new FormData(e.target);

            let clientData = {
                user: formData.get('user'),
                password: formData.get('password'),
            }
            registerUser(clientData);
            navigate('/login')
        }
    }

    return (
        <div className="register-page">Register
            <form className="register" onSubmit={onRegister}>
                <label htmlFor="user">Username</label><br />
                <input type="text" id="user" name="user" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" required /><br />
                <label htmlFor="re-pass">Repeat password</label><br />
                <input type="password" id="re-pass" name="re-pass" required /><br />
                <input className="submit" type="submit" value="Register!" />
            </form>
        </div>
    )
}