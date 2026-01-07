import { Link } from 'react-router-dom';

function Home() {
    const token = localStorage.getItem('token');

    if (token) {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
                    <h1 className="text-3xl font-bold">Welcome back 🍿</h1>

                    <div className="flex gap-4">
                        <Link
                            to="/movies"
                            className="px-6 py-3 bg-sky-800 text-white rounded hover:bg-sky-950"
                        >
                            Browse Movies
                        </Link>

                        <Link
                            to="/my-reservations"
                            className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100"
                        >
                            My Reservations
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-[70vh] gap-6">
            <h1 className="text-4xl font-bold">Welcome to Cinema App 🎥</h1>

            <div className="flex gap-4">
                <Link
                    to="/movies"
                    className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-100"
                >
                    Browse Movies
                </Link>

                <Link
                    to="/login"
                    className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default Home;

