const AuthLayout = ({ children }) => {
    return (
        <div className="container vh-100 d-flex align-items-center justify-content-center">
            <div className="card" style={{ width: '20rem' }}>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
