import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

import AuthLayout from '../../layouts/AuthLayout';
import { auth } from '../../firebase';

const CreateAccount = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, , loading, error] =
        useCreateUserWithEmailAndPassword(auth);
    const createUser = async ({ email, password }) => {
        const user = await createUserWithEmailAndPassword(email, password);
        if (user) navigate('/');
    };
    return (
        <AuthLayout>
            <h3>Create Account</h3>
            <hr />
            <form onSubmit={handleSubmit(createUser)}>
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
                <button
                    className="btn btn-primary w-100 mb-3"
                    disabled={loading}
                    type="submit"
                >
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
                {error && (
                    <span style={{ color: '#de3d32' }}>{error.message}</span>
                )}
            </form>
            <div className="text-center">
                <span>Already Have a</span> <Link to="/login">account?</Link>
            </div>
        </AuthLayout>
    );
};

export default CreateAccount;
