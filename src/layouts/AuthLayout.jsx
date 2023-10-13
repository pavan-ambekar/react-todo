const AuthLayout = ({ children }) => {
    return (
        <div className="container vh-100 d-flex flex-column align-items-center justify-content-center">
            <h2 className="font-monospace">Pensieve</h2>
            <div className="card" style={{ width: '20rem' }}>
                {children}
            </div>
        </div>
    );
};

export default AuthLayout;
