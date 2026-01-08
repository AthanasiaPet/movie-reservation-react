import {useEffect, useState} from "react";
import getMovies from "../api/movieService.tsx";
import { useNavigate } from 'react-router-dom';
import inception from '../images/inception.jpg'
import matrix from '../images/matrix.jpg'
import dark_knight from '../images/dark_knight.jpg'
import die_hard from '../images/die_hard.jpg'
import about_time from '../images/about_time.jpg'
import love_actually from '../images/love_actually.jpg'
import zootopia_2 from '../images/zootopia_2.jpg'
import grown_ups from '../images/grown_ups.jpg'
import dragon from '../images/dragon.jpg'



function Movies() {
    const [movies, setMovies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedGenre, setSelectedGenre] = useState('All');


    const navigate = useNavigate();

    const moviePosters: Record<string, string> = {
        Inception: inception,
        "The Matrix": matrix,
        "The Dark Knight": dark_knight,
        "Die Hard": die_hard,
        "About Time": about_time,
        "Love Actually": love_actually,
        "Zootopia 2": zootopia_2,
        "Grown Ups": grown_ups,
        "How To Train Your Dragon": dragon

    };



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

    const genres = ['All', ...new Set(movies.map(movie => movie.genre))];
    const filteredMovies = selectedGenre === 'All' ? movies : movies.filter(movie => movie.genre.trim().toLowerCase() === selectedGenre.toLowerCase());

    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Movies</h2>

                {movies.length === 0 && <p>No movies found.</p>}

                <div className="mb-4">
                    <label className="mr-2 font-bold">Genre:</label>
                    <select
                        value={selectedGenre}
                        onChange={(e) => setSelectedGenre(e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        {genres.map((genre) => (
                            <option key={genre} value={genre}>
                                {genre}
                            </option>
                        ))}
                    </select>
                </div>


                <ul className="space-y-2">
                    {filteredMovies.map((movie: any) => (
                        <li
                            key={movie.id}
                            onClick={() => navigate(`/movies/${movie.id}/screenings`)}
                            className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition flex h-48"
                        >
                            <img
                                src={moviePosters[movie.title]}
                                alt={movie.title}
                                className="w-32 h-full object-cover"
                            />

                            <div className="p-4 flex flex-col gap-2 flex-1">
                                <strong className="text-lg">{movie.title}</strong>
                                <span className="text-sm text-gray-500">
                                 {movie.duration} min • {movie.genre}
                                </span>
                                <p className="text-sm text-gray-600 line-clamp-3">
                                    {movie.description}
                                </p>
                                <span className="mt-auto text-blue-600 text-sm">
                                    View screenings →
                                </span>
                            </div>
                        </li>

                    ))}
                </ul>
            </div>
        </>

    );

}

export default Movies;