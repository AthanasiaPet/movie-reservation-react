import api from './axios';

const createReservation = async (screeningId: number) => {
    const response = await api.post('/reservations', {
        screeningId,
        seatNumber: 'A1'
    });

    return response.data;
};

const getMyReservations = async () => {
    const response = await api.get('/reservations/my');
    return response.data;
};

export { createReservation, getMyReservations };
