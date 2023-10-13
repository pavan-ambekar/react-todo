import { Link } from 'react-router-dom';
import { useSignOut } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';

const Navbar = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const logout = async () => await signOut();
    if (error) console.error(error);
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
                <Link className="navbar-brand font-monospace" to="/">
                    Pensieve
                </Link>
                <button
                    onClick={logout}
                    disabled={loading}
                    className="btn btn-danger"
                >
                    {loading ? (
                        <div
                            className="spinner-border spinner-border-sm"
                            role="status"
                        >
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    ) : (
                        <span>Logout</span>
                    )}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
