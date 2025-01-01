import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState(""); // Menggunakan email, bukan username
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/auth/login", {
                email,
                password,
            });
    
            // Debug respons API
            console.log("API Response:", response.data);
    
            // Ambil data dari respons
            const { data } = response.data;
    
            if (!data || !data.accessToken) {
                throw new Error("Invalid response from server");
            }
    
            // Simpan accessToken dan data pengguna di localStorage
            localStorage.setItem("authToken", data.accessToken);
            localStorage.setItem("user", JSON.stringify(data.clean));
    
            // Redirect berdasarkan ID user
            if (data.clean.id === 1) {
                navigate("/AdminDashboard");
            } else {
                navigate("/Home");
            }
    
            // Reload halaman setelah login berhasil
            window.location.reload();
        } catch (err) {
            // Tampilkan error di UI
            console.error("Login Error:", err);
            setError("Login failed. Please check your credentials.");
        }
    };
    
    
    return (
        <div className="min-h-screen flex items-center justify-center sm:px-96 lg:px-96">
            <div className="container d-flex justify-content-center align-items-center ">
                <div className="w-full max-w-screen-xl p-4 ">
                    <div className="bg-white rounded-xl shadow-lg w-full flex flex-col md:flex-row items-stretch">
                        {/* Left Section */}
                        <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-indigo-600 rounded-l-xl p-6">
                            <img
                                src="/src/assets/img/gbr_hero1.png"
                                alt="Featured"
                                className="w-64 mb-6"
                            />
                            <h2 className="text-white text-3xl font-semibold mb-2 text-center">
                                Clinic Holistic Care
                            </h2>
                            <p className="text-white text-center text-lg">
                                Kesehatan Anda Adalah Prioritas Kami.
                            </p>
                        </div>

                        {/* Right Section */}
                        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                            <div className="text-center mb-6">
                                <h2 className="text-3xl font-bold text-gray-800">Hello, Again</h2>
                                <p className="text-gray-600">We are happy to have you back.</p>
                            </div>
                            {error && (
                                <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
                                    {error}
                                </div>
                            )}
                            <form>
                                <div className="mb-4">
                                    <input
                                        type="email" // Menggunakan email
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)} // Mengubah email
                                    />
                                </div>
                                <div className="mb-4">
                                    <input
                                        type="password"
                                        className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center justify-between mb-4">
                                    <label className="flex items-center">
                                        <input
                                            type="checkbox"
                                            className="text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                        />
                                        <span className="ml-2 text-gray-600 text-sm">Remember Me</span>
                                    </label>
                                    <a
                                        href="#"
                                        className="text-indigo-600 text-sm hover:underline"
                                    >
                                        Forgot Password?
                                    </a>
                                </div>
                                <button
                                    type="button"
                                    className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    onClick={handleLogin}
                                >
                                    Login
                                </button>
                            </form>
                            <div className="text-center mt-6">
                                <p className="text-gray-600">
                                    Don't have an account?{" "}
                                    <a
                                        onClick={() => navigate("/signup")}
                                        className="text-indigo-600 hover:underline cursor-pointer"
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
