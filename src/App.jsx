import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/Login';
import CreateAccount from './pages/create-account/CreateAccount';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<h1>Hello</h1>} />
                <Route path="/login" element={<Login />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
