import { useEffect, useState } from 'react';
import { getMyReservations } from '../api/reservationService';

function MyReservations() {
    const [reservations, setReservations] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchReservations = async () => {
            try {
                const data = await getMyReservations();
                setReservations(data);
            } catch (error) {
                console.error('Failed to load reservations', error);
            } finally {
                setLoading(false);
            }
        };

        fetchReservations();
    }, []);

    if (loading) {
        return <p className="p-4">Loading...</p>;
    }

    return (
        <div className="p-4">
            <h2 className="text-xl font-bold mb-4">My Reservations</h2>

            {reservations.length === 0 && <p>No reservations found.</p>}

            <ul className="space-y-2">
                {reservations.map((reservation: any) => (
                    <li key={reservation.uuid} className="border p-3 rounded">
                        <div><strong>Movie:</strong> {reservation.movieTitle}</div>
                        <div><strong>Cinema Hall:</strong> {reservation.cinemaHallName}</div>
                        <div><strong>Seat:</strong> {reservation.seatNumber}</div>
                        <div><strong>Status:</strong> {reservation.status}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MyReservations;
