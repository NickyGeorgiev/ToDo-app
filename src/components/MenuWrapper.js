import { Link } from "react-router-dom"

export const MenuWrapper = () => {


    return (
        <div className="menu-wrapper">
            <ul>
                <li>
                    <Link to='/create'>Create Todo</Link>
                </li>
                <li>
                    <Link to='/load'>Load Todos</Link>
                </li>
            </ul>
        </div>
    )
}
