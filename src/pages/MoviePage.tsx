import {useEffect, useState} from "react";
import getMovies from "../api/movieService.tsx";
import { useNavigate } from 'react-router-dom';



function Movies() {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();


    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getMovies();
                setMovies(data);
            } catch (error) {
                console.error("Error loading movies", error);
            } finally {
                setLoading(false);
            }
        };
        fetchMovies();

    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Movies</h2>

                {movies.length === 0 && <p>No movies found.</p>}

                <ul className="space-y-2">
                    {movies.map((movie: any) => (
                        <li key={movie.id} className="border p-2 rounded cursor-pointer hover:bg-blue-200" onClick={() => navigate(`/movies/${movie.id}/screenings`)}>
                            <div className="flex gap-2 items-center">
                                <strong>{movie.title}</strong>
                                <span className="text-sm text-gray-500">
                                  {movie.duration} min - {movie.genre}
                                </span>
                            </div>
                            <div className="text-sm text-gray-600">
                                {movie.description}
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </>

    );

}

export default Movies;