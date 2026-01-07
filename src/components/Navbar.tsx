import { Link, useNavigate } from 'react-router-dom';


function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <>
            <nav className="p-4 px-8 border-b bg-gray-900 text-white flex justify-between items-center">
                <span className="font-bold text-xl tracking-wide">
                <Link to="/">Cinema App</Link>
                </span>

                <div className="flex gap-4 items-center">
                    <Link to="/movies" className="text-sm hover:underline">
                        Movies
                    </Link>

                    {token && (
                        <Link to="/my-reservations" className="text-sm hover:underline">
                            My Reservations
                        </Link>
                    )}

                    {token && (
                        <button
                            onClick={handleLogout}
                            className="text-sm text-red-600 hover:underline"
                        >
                            Logout
                        </button>
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
