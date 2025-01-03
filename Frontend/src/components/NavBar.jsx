import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Stethoscope } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const NavBar = () => {
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [serviceOpen, setServiceOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Periksa apakah pengguna sudah login
        const token = localStorage.getItem('authToken');
        const user = JSON.parse(localStorage.getItem('user'));
        if (token && user) {
            setIsLoggedIn(true);
            setUsername(user.username); // Ambil nama pengguna dari localStorage
        }

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogout = () => {
        try {
            console.log("Logging out...");

            // Hapus token dan data pengguna dari localStorage
            localStorage.removeItem("authToken");
            localStorage.removeItem("user");

            // Update state untuk mengindikasikan pengguna telah logout
            setIsLoggedIn(false);
            setUsername("");

            // Arahkan ke halaman login
            navigate("/login");
        } catch (error) {
            console.error("Logout failed:", error.message);
        }
    };

    const handleAppointmentClick = () => {
        const token = localStorage.getItem("authToken");
        if (!token) {
            // Jika belum login, tampilkan peringatan
            Swal.fire({
                title: "Silahkan Login",
                text: "Anda harus login terlebih dahulu untuk mengakses halaman ini.",
                icon: "warning",
                confirmButtonText: "OK",
            });
        } else {
            // Jika sudah login, arahkan ke halaman appointment
            navigate("/appoinment");
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/20 backdrop-blur-lg' : ' bg-slate-200'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent hover:text-purple-400 bg-clip-text">
                        <div className="flex items-center">
                            <Stethoscope className="text-blue-600 mr-2" size={32} />
                            <span className="text-2xl font-bold text-blue-600">Fams Care Clinic</span>
                        </div>
                    </a>

                    {/* Hamburger Menu Icon For Smaller Screens */}
                    <div className="sm:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="bg-blue-600 p-2 rounded-md text-gray-800 hover:text-blue-600 transition">
                            {menuOpen ? (
                                <FontAwesomeIcon icon={faTimes} className="text-white w-5 h-5" />
                            ) : (
                                <FontAwesomeIcon icon={faBars} className="text-white w-5 h-5" />
                            )}
                        </button>
                    </div>

                    {/* Navigation Links for Larger Screens */}
                    <div className="hidden sm:flex space-x-8">
                        <a onClick={() => navigate('/home')} className="text-gray-800 hover:text-blue-600 transition">Home</a>
                        <a onClick={handleAppointmentClick} className="text-gray-800 hover:text-blue-600 transition">Appointment</a>
                        <a onClick={() => navigate("/about")} className="text-gray-800 hover:text-blue-600 transition">About</a>
                        <div className="relative">
                            <a
                                onClick={() => setServiceOpen(!serviceOpen)}
                                className="text-gray-800 hover:text-blue-600 transition focus:outline-none">
                                Service
                            </a>
                            {serviceOpen && (
                                <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md py-2 w-40">
                                    <a onClick={() => navigate("/layanan-luka")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Perawatan Luka</a>
                                    <a onClick={() => navigate("/baby-spa")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Baby SPA</a>
                                    <a onClick={() => navigate("/hypno")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Hypnoterapi</a>
                                    <a onClick={() => navigate("/about")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Bekam Modern</a>
                                </div>
                            )}
                        </div>
                        {isLoggedIn ? (
                            <>
                                <span className="text-gray-800">Hi, {username}</span>
                                <a
                                    onClick={handleLogout}
                                    className="text-red-600 hover:text-blue-600 transition"
                                >
                                    Logout
                                </a>
                            </>
                        ) : (
                            <a onClick={() => navigate("/login")} className="text-red-600 hover:text-blue-600 transition">Login</a>
                        )}
                    </div>
                </div>

                {/* For Mobile Menu */}
                {menuOpen && (
                    <div className="sm:hidden bg-black/70 backdrop-blur-lg p-4 rounded-lg mt-2">
                        <div className="flex flex-col space-y-4">
                            <a onClick={() => navigate('/home')} className="text-white hover:text-blue-600">Home</a>
                            <a onClick={handleAppointmentClick} className="text-white hover:text-blue-600">Appointment</a>
                            <a onClick={() => navigate("/about")} className="text-white hover:text-blue-600">About</a>
                            <div>
                                <a
                                    onClick={() => setServiceOpen(!serviceOpen)}
                                    className="text-white hover:text-blue-600 transition focus:outline-none">
                                    Service
                                </a>
                                {serviceOpen && (
                                    <div className="mt-2 bg-white rounded-md shadow-lg p-2">
                                        <a onClick={() => navigate("/layanan-luka")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Perawatan Luka</a>
                                        <a onClick={() => navigate("/baby-spa")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Baby SPA</a>
                                        <a onClick={() => navigate("/hypno")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Hypnoterapi</a>
                                        <a onClick={() => navigate("/about")} className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition">Bekam Modern</a>
                                    </div>
                                )}
                            </div>
                            {isLoggedIn ? (
                                <button onClick={handleLogout} className="text-red-600 hover:text-blue-600 transition">Logout</button>
                            ) : (
                                <button onClick={() => navigate("/login")} className="text-gray-800 hover:text-blue-600 transition">Login</button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;