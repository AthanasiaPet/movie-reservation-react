import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import api from '../api/axios';
import { createReservation } from '../api/reservationService';



function Screenings() {
    const [screenings, setScreenings] = useState<any[]>([]);
    const [seatNumber, setSeatNumber] = useState('');

    const {movieId} = useParams();

    useEffect(() => {
        const fetchScreenings = async () => {
            try {
                const response = await api.get(`/screenings/by-movie/${movieId}`)
                setScreenings(response.data);
            } catch(error) {
                console.error('Error loading screenings', error);
            }
        };
        fetchScreenings();
    }, [movieId]);

    const handleReserve = async (screeningId: number) => {

        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = '/login';
            return;
        }

        if (!seatNumber.trim()) {
            alert('Please enter a seat number');
            return;
        }

        try {
            await createReservation(screeningId, seatNumber);
            alert('Reservation created successfully!');
            setSeatNumber('');
        } catch (error: any) {
            if (error.response?.status === 409) {
                alert('This seat is already reserved. Please choose another one.');
            } else {
                alert('Failed to create reservation');
            }
        }
    };


    return (
        <>
            <div className="p-4">
                <h2 className="text-xl font-bold mb-4">Screenings</h2>

                {screenings.length === 0 && <p>No screenings found.</p>}

                <ul className="space-y-2">
                    {screenings.map((screening: any) => (
                        <li key={screening.uuid} className="border p-2 rounded">
                            <div>
                                <strong>Date:</strong> {new Date(screening.screeningDateTime).toLocaleDateString()}
                            </div>
                            <div>
                                <strong>Time:</strong>{" "}
                                {new Date(screening.screeningDateTime).toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                })}
                            </div>
                            <div>
                                <strong>Price:</strong> {screening.price}€
                            </div>
                            <input
                                type="text"
                                placeholder="Seat (e.g. A1)"
                                value={seatNumber}
                                onChange={(e) => setSeatNumber(e.target.value)}
                                className="border p-1 rounded text-sm w-32"
                            />
                            <button
                                onClick={() => handleReserve(screening.id)}
                                className="mt-2 px-3 py-1 bg-blue-600 text-white rounded"
                            >
                                Reserve
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );

}

export default Screenings;