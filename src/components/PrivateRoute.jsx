import { useAuthState } from 'react-firebase-hooks/auth';

import { auth } from '../firebase';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute = () => {
    const location = useLocation();
    const [user, loading, error] = useAuthState(auth);

    if (loading)
        return (
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div className="spinner-border mx-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    if (error || !user)
        return <Navigate to="login" state={{ from: location }} replace />;
    return <Outlet />;
};

export default PrivateRoute;
