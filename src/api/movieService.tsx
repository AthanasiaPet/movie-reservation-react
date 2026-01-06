import api from './axios';


const getMovies = async() => {
    const response = await api.get('/movies');
    return response.data;
};

export default getMovies;