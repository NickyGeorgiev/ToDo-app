import { useState, useContext, useEffect } from "react"
import { Link } from "react-router-dom"

export const Header = () => {

    let loggedUser = localStorage.getItem('userId')
    let userEmail = localStorage.getItem('userEmail')

    let [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        if (loggedUser) {
            setIsLogin(!isLogin)
        }
    }, [loggedUser])

    const logOut = () => {
        console.log('click');
        localStorage.clear();
    }

    return (
        <nav className="nav">
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                {!isLogin
                    ?
                    <>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                    </>
                    : 
                    <>
                        <li>
                            <h3>Hello, {userEmail}</h3>
                        </li>
                        <li>
                            <a href='/' onClick={logOut}>Logout</a>
                        </li>
                    </>}
            </ul>
        </nav>
    )

}