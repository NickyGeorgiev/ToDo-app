import { registerUser } from "../fetchService/registerUser";

export const Register = () => {

    const onRegister = (e) => {
        e.preventDefault();
        if (e.target[1].value !== e.target[2].value) {
            alert('Паролите трябва да са еднакви');
        } else {
            let formData = new FormData(e.target);

            let clientData = {
                email: formData.get('email'),
                password: formData.get('password'),
            }
            registerUser(clientData);
        }
    }

    return (
        <div className="register-page">Register
            <form className="register" onSubmit={onRegister}>
                <label htmlFor="email">Email</label><br />
                <input type="text" id="email" name="email" required /><br />
                <label htmlFor="password">Password</label><br />
                <input type="password" id="password" name="password" required /><br />
                <label htmlFor="re-pass">Repeat password</label><br />
                <input type="password" id="re-pass" name="re-pass" required /><br />
                <input className="submit" type="submit" value="Register!" />
            </form>
        </div>
    )
}