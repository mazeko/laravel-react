import { Link } from "react-router-dom"

export default function SignUp() {
    const onSubmit = (event) => {
        event.preventDefault()
    }
    
    return (
        <div className="login-signup-form animated fadeInDown">
        <div className="form">
            <form onSubmit={onSubmit}>
                <h2 className="title">Sign Up for free</h2>
                <input type="text" name="fullname" placeholder="Full Name" id="" />
                <input type="email" name="email" placeholder="Email" id="" />
                <input type="password" name="password" placeholder="Password" id="" />
                <input type="password" name="confirm_password" placeholder="Confirm Password" id="" />
                <button className="btn btn-block">Sign Up</button>
                <p className="message">
                    Already Registered ? <Link to="/login" >Sign In</Link>
                </p>
            </form>
        </div>
    </div>
    )
}