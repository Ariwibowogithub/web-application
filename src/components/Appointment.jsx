import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Appointment = () => {
  const navigate = useNavigate();

  // Hooks harus dipanggil di luar logika kondisional
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Gunakan `null` sebagai default state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    doctor: "",
    date: "",
    reason: "",
  });

  // Validasi login di dalam useEffect
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      // Jika belum login, tampilkan peringatan dan arahkan ke halaman login
      Swal.fire({
        title: "Silahkan Login",
        text: "Anda harus login terlebih dahulu untuk mengakses halaman ini.",
        icon: "warning",
        confirmButtonText: "OK",
      }).then(() => {
        navigate("/login");
      });
    } else {
      // Set state login jika token ditemukan
      setIsLoggedIn(true);
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    const formBody = new FormData();
    Object.entries(formData).forEach(([key, value]) => formBody.append(key, value));
    formBody.append("access_key", "e94c9dc4-f965-4706-bdc1-4fcf17c1c327");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formBody,
      });

      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Success",
          text: "Appointment Booked Successfully",
          icon: "success",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          doctor: "",
          date: "",
          reason: "",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Something went wrong. Please try again.",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error. Please try again.",
        icon: "error",
      });
    }
  };

  // Render loading screen jika isLoggedIn masih null
  if (isLoggedIn === null) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* <!-- Section 1: Hero Section --> */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white sm:px-28 lg:px-28 pt-12 py-16 relative items-center">
        <div className="container mx-auto px-10 text-center">
          <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 mt-8">
            SILAHKAN MELAKUKAN PENDAFTARAN BOOKING LAYANAN
          </h2>
          <p className="mb-8 text-lg sm:text-xl lg:text-xl">
            Fams Care adalah Klinik Kesehatan Umum yang Menyediakan Berbagai Layanan Kesehatan
            Untuk Masyarakat Dengan Mengutamakan Pelayanan Yang Profesional, Modern dan Canggih.
          </p>
        </div>
      </section>

      {/* <!-- Section 2: Book Appointment --> */}
      <section className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto">
          <div className="w-full max-w-2xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-800 font-bold text-center mb-6 sm:mb-8 lg:mb-10">
              Book Appointment
            </h2>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-800 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Select Doctor</label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                >
                  <option value="">Select a Doctor</option>
                  <option value="Dr. Mohan - Cardiology">Dr. Metha - Dokter Umum</option>
                  <option value="Dr. Shekar - Orthopedics">Dr. Galang - Dokter Umum</option>
                  <option value="Dr. Shilpa - Pediatrics">Dr. Dika - Dokter Anak</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <div>
                <label className="block text-gray-800 mb-2">Reason for Visit</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border rounded-md bg-white text-black"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition"
              >
                Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
