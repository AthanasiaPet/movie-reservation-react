import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/LoginPage';
import Navbar from './components/Navbar';
import Reservations from "./pages/ReservationPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import Movies from "./pages/MoviePage.tsx";
import Screenings from "./pages/ScreeningPage.tsx";
import MyReservations from "./pages/MyReservationPage.tsx";
import Home from "./pages/HomePage.tsx";
import Register from "./pages/RegisterPage.tsx";



function App() {


    return (
    <>
        <BrowserRouter>
            <Navbar />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/reservations" element={
                    <ProtectedRoute>
                        <Reservations />
                    </ProtectedRoute>}
                />
                <Route path="/movies" element={<Movies />} />
                <Route path="/movies/:movieId/screenings" element={<Screenings />} />
                <Route path="/my-reservations" element={
                    <ProtectedRoute>
                        <MyReservations />
                    </ProtectedRoute>}
                />
                <Route path="/register" element={<Register />} />
            </Routes>

        </BrowserRouter>

    </>
  )
}

export default App
