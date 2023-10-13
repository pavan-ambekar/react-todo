import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CreateAccount from './pages/create-account/CreateAccount';
import PrivateRoute from './components/PrivateRoute';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
                {/* Private Route */}
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<h1>Hello</h1>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
