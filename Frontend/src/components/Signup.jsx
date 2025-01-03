import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(""); // Tambahkan name untuk nama pengguna
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");

    const handleSignup = async (e) => {
        e.preventDefault();

        // Validasi panjang password
        if (password.length < 6) {
            alert("Password harus memiliki minimal 6 karakter.");
            return;
        }

        // Validasi kecocokan password dan confirm password
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            // Panggil endpoint register
            await axios.post("http://localhost:3000/api/auth/register", {
                email,
                name,
                username,
                password,
            });

            // Navigasi ke halaman login setelah berhasil mendaftar
            navigate("/login");
        } catch (error) {
            // Tampilkan pesan error dari backend
            setError(error.response?.data?.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center sm:px-96 lg:px-96">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="row border rounded-5 p-3 bg-white shadow box-area">
                    <div
                        className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box bg-indigo-600"
                    >
                        <div className="featured-image mb-3">
                            <img
                                src="/src/assets/img/gbr_hero1.png"
                                className="img-fluid"
                                style={{ width: "250px" }}
                                alt="Featured"
                            />
                        </div>
                        <p
                            className="text-white fs-2"
                            style={{
                                fontFamily: "'Courier New', Courier, monospace",
                                fontWeight: 600,
                            }}
                        ></p>
                        <small
                            className="text-white text-wrap text-center"
                            style={{
                                width: "17rem",
                                fontFamily: "'Courier New', Courier, monospace",
                            }}
                        >
                            Pusat Layanan Kesehatan Modern.
                        </small>
                    </div>

                    <div className="col-md-6 right-box">
                        <div className="row align-items-center">
                            <div className="header-text mb-4 text-center">
                                <h2>SIGN UP HERE</h2>
                                <p>Create Your User Account Now</p>
                            </div>
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSignup} className="w-100">
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Your Full Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="text"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="email"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Email address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-1">
                                    <input
                                        type="password"
                                        className="form-control form-control-lg bg-light fs-6"
                                        placeholder="Confirm Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="input-group mb-3">
                                    <button
                                        type="submit"
                                        className="btn text-white btn-lg w-100 fs-6"
                                        style={{ background: "#3D447A" }}
                                    >
                                        Sign Up
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;