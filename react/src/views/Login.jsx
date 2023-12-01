import { Link } from "react-router-dom"

export default function Login() {
    const onSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h2 className="title">Login to your App</h2>
                    <input type="email" name="email" placeholder="Email" id="" />
                    <input type="password" name="password" placeholder="Password" id="" />
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not Registered ? <Link to="/signup" >Create an account </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}