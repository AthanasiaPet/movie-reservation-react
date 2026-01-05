import {useState} from "react";
import {login} from "../api/authService.ts";

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const data = await login(username, password);
            localStorage.setItem('token', data.token);
            window.location.href = '/';
        } catch (error) {
            setError('Λάθος username ή password');
        }

    }

    return (
        <>
            <div className="p-4 max-w-sm mx-auto">
                <h2 className="text-xl font-bold mb-4">Login</h2>

                {error && <p className="text-red-500 mb-2">{error}</p>}

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="border p-2"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="border p-2"
                    />

                    <button type="submit" className="bg-blue-600 text-white p-2">
                        Login
                    </button>
                </form>
            </div>

        </>

        );

}

export default Login;
