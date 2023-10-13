import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../layouts/AuthLayout';
import { useForm } from 'react-hook-form';

import { auth } from '../../firebase';
import {
    useSignInWithEmailAndPassword,
    useSignInWithGoogle,
} from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const [signInWithEmailAndPassword, , loading, error] =
        useSignInWithEmailAndPassword(auth);

    const login = async ({ email, password }) => {
        const user = await signInWithEmailAndPassword(email, password);
        if (user) navigate('/');
    };

    const [signInWithGoogle, , gLoading, gError] = useSignInWithGoogle(auth);
    const loginWithGoogle = async () => {
        const user = await signInWithGoogle();
        if (user) navigate('/');
    };

    return (
        <AuthLayout>
            <h3>login</h3>
            <hr />
            <form onSubmit={handleSubmit(login)}>
                <div className="form-floating mb-3">
                    <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="name@example.com"
                        required
                        {...register('email')}
                    />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        type="password"
                        className="form-control"
                        id="floatingPassword"
                        placeholder="Password"
                        required
                        {...register('password')}
                    />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <button className="btn btn-primary w-100 mb-3" type="submit">
                    {loading ? (
                        <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span>Sign in</span>
                    )}
                </button>
                <button
                    onClick={loginWithGoogle}
                    className="btn btn-secondary w-100 mb-3"
                    type="button"
                >
                    {gLoading ? (
                        <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span>Sign in with Google</span>
                    )}
                </button>

                {error && (
                    <span style={{ color: '#de3d32' }}>{error.message}</span>
                )}
                {gError && (
                    <span style={{ color: '#de3d32' }}>{gError.message}</span>
                )}
            </form>
            <div className="text-center">
                <span>New to Pensieve?</span>{' '}
                <Link to="/create-account">Create an account</Link>
            </div>
        </AuthLayout>
    );
};

export default Login;
