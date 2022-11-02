import { Link } from "react-router-dom"

const User = () => {
    return (
        <div className="main">
        <h2>Qui êtes-vous ?</h2>
        <Link to='/user/12'>Karl</Link>
        <Link to='/user/18'>Cecilia</Link>
        </div>

    )
}

export default User;