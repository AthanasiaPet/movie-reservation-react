import { useState } from 'react';
import api from '../api/axios';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await api.post('/users', {
                username,
                password,
                email
            });

            navigate('/login');
        } catch (error: any) {
            setError('Registration failed');
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-4">Register</h2>

            {error && <p className="text-red-600">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    className="w-full border p-2 rounded"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    className="w-full border p-2 rounded"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <input
                    type="email"
                    className="w-full border p-2 rounded"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button className="w-full bg-blue-600 text-white py-2 rounded">
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
