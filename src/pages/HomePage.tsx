import { Link } from 'react-router-dom';

function Home() {
    const token = localStorage.getItem('token');

    if (token) {
        return (
            <>
                <div className="flex flex-col items-center justify-center h-[100vh] gap-6 bg-gradient-to-b from-gray-900 to-black text-white">
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
                            className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-300"
                        >
                            My Reservations
                        </Link>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center h-[100vh] gap-5 bg-gradient-to-b from-gray-900 to-black text-white">
            <h1 className="text-4xl font-bold mb-1  translate-x-5">Welcome to Cinema App 🎥</h1>
            <p className="text-gray-500 mt-1 font-bold">
                Book your seat and enjoy the show!
            </p>


            <div className="flex gap-4">
                <Link
                    to="/movies"
                    className="px-6 py-3 border border-gray-300 rounded hover:bg-gray-300"
                >
                    Browse Movies
                </Link>

                <Link
                    to="/login"
                    className="px-6 py-3 bg-sky-800 text-white rounded hover:bg-sky-950"
                >
                    Sign In
                </Link>
            </div>
        </div>
    );
}

export default Home;

