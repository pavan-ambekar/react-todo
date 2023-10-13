import { Link } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';

const Login = () => {
    return (
        <AuthLayout>
            <h3>login</h3>
            <hr />
            <form>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 mb-3" type="submit">
                    Login
                </button>
                <button className="btn btn-secondary w-100 mb-3" type="button">
                    Sign in with Google
                </button>
            </form>
            <div className="text-center">
                <span>New to Pensieve?</span>{' '}
                <Link to="/create-account">Create an account</Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
