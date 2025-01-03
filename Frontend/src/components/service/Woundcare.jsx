//import React from "react";
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

const testimonials = [
    {
        name: "Ari Wibowo",
        feedback:
            "Saya sangat puas dengan layanan rawat luka di Fams Care. Luka saya sembuh lebih cepat dan lebih bersih, berkat perawatan modern yang mereka gunakan.",
        rating: 5,
        img: "src/assets/img/testi1.jpg",
    },
    {
        name: "Joko Setiawan",
        feedback:
            "Terima kasih Fams Care! Perawatannya sangat profesional dan ramah. Luka saya yang semula sulit sembuh, kini sudah hampir pulih total.",
        rating: 4,
        img: "src/assets/img/testi2.jpg",
    },
    {
        name: "Ika Puspita",
        feedback:
            "Layanan rawat luka di Fams Care sangat efektif! Teknologi yang digunakan membuat luka saya cepat kering dan tidak ada infeksi. Sangat rekomended!",
        rating: 5,
        img: "src/assets/img/testi3.jpg",
    },
    {
        name: " Sri Rejeki",
        feedback:
            "Saya merasa sangat diperhatikan di Fams Care. Perawatannya sangat teliti dan menggunakan metode modern, jadi saya merasa aman dan nyaman selama proses penyembuhan.",
        rating: 4,
        img: "src/assets/img/testi4.jpg",
    },
    {
        name: "Doni Salmanan",
        feedback:
            "Fams Care memberikan solusi terbaik untuk luka saya. Dengan pendekatan modern dan tenaga medis yang berpengalaman, luka saya sembuh dengan baik tanpa komplikasi.",
        rating: 4,
        img: "src/assets/img/testi5.jpg",
    },
    {
        name: "Joko Setiawan",
        feedback:
            "Setelah mencoba berbagai perawatan luka, akhirnya saya menemukan Fams Care. Proses penyembuhan lebih cepat dan luka saya terlihat lebih sehat.",
        rating: 5,
        img: "src/assets/img/testi6.jpg",
    },
];

const Woundcare = () => {
    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);

    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const currentItems = testimonials.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div>
            <section className="min-h-screen ">
                <div className="bg-white relative pt-12 py-16 pb-17">
                    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 lg:px-32 py-16 lg:py-28">
                        <div className="lg:w-1/2 space-y-6">
                            <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                                We Provide High Quality{" "}
                                <span className="text-yellow-400">Wound Care</span> Services
                            </h1>
                            <p className="text-gray-600">
                                <span className=" text-blue-800 font-bold">
                                    CEGAH AMPUTASI{" "}
                                </span>
                                Mulai Dari Sekarang. Rawat Luka Mu Dengan Baik dan Percayakan
                                Pada Kami. Ribuan Pasien Telah Kami Tangani.
                            </p>
                            <div className="flex space-x-4">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                                    Konsultasi
                                </button>
                                <button className="border border-gray-400 px-6 py-3 rounded-md hover:bg-gray-100">
                                    Our Service
                                </button>
                            </div>
                        </div>

                        <div className="relative lg:w-1/2 flex items-center justify-center">
                            <img
                                src="src/assets/img/gbr_hero3.png"
                                alt="Doctor"
                                className="w-full max-w-md object-cover rounded-lg"
                            />

                            <div className="absolute mr-11  top-8 right-3 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm shadow-md">
                                200+ Happy Customers
                            </div>
                            <div className="absolute bottom-8 right-8 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg text-sm shadow-md">
                                300+ Wound Care Get Fixed
                            </div>
                            <div className="absolute bottom-8 left-8 bg-yellow-100 text-yellow-600 px-4 py-2 rounded-lg text-sm shadow-md">
                                5+ Exspert Medis
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-blue-600 text-white py-16 pt-10">
                <div className="container mx-auto px-6 lg:px-32">
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        style={{ marginTop: "var(--section-spacing, 2rem)" }}
                    >

                        <div>
                            <h2 className="text-3xl font-bold mb-4">
                                KENAPA HARUS MEMILIH KAMI?
                            </h2>
                            <p className="text-lg text-blue-200 pt-30">
                                Inilah Beberapa Alasan kenapa Anda Harus Memilih kami :
                            </p>
                        </div>

                        <div className="grid grid-cols-auto sm:grid-cols-3 gap-6">

                            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <div className="text-4xl mb-4">
                                    <i className="fa-solid fa-user-tie"></i>
                                </div>
                                <h3 className="font-semibold text-lg text-center">
                                    Profesional Medis
                                </h3>
                            </div>
                            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <div className="text-4xl mb-3">
                                    <i className="fa-solid fa-certificate"></i>
                                </div>
                                <h3 className="font-semibold text-lg text-center">
                                    Medis Berpengalaman
                                </h3>
                            </div>


                            <div className="bg-white text-blue-600 p-6 rounded-lg shadow-lg flex flex-col items-center">
                                <div className="text-4xl mb-4">
                                    <i className="fa-solid fa-house-medical"></i>
                                </div>
                                <h3 className="font-semibold text-lg text-center">
                                    Fasilitas dan Alat Modern
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="bg-gray-50 items-center justify-center">
                    <div className="max-w-9xl w-full bg-white rounded-lg shadow-lg p-8 mt-10">
                        <div className="text-center mb-12">
                            <h1 className="text-4xl font-bold text-gray-800">
                                Kami <span className="text-yellow-500">Berkomitmen</span>{" "}
                                Memberikan Pelayanan Terbaik
                            </h1>
                            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
                                Fams Care berkomitmen untuk memberikan pelayanan terbaik dalam
                                perawatan luka, dengan pendekatan yang penuh perhatian dan
                                profesional. Tim kami yang terlatih siap membantu Anda dengan
                                layanan rawat luka yang cepat, tepat, dan nyaman, agar Anda
                                dapat pulih dengan lebih cepat dan optimal.
                            </p>
                        </div>

                        <div className="flex flex-col md:flex-row items-center">
                            <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                                <img
                                    src="src/assets/img/gbr_hero1.png"
                                    alt="Doctor Illustration"
                                    className="w-80 h-80"
                                />
                            </div>

                            <div className="md:w-1/2">
                                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                                    KAMI MELAYANI SEGALA JENIS PERAWATAN LUKA
                                </h2>
                                <ul className="grid grid-cols-2 gap-4 text-gray-700 text-lg">
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Diabetes
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Dekubitus
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Post Operasi
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Karsinoma (Cancer)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Kronis (Arterial/Vein Ulcer)
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Perawatan Luka Akut
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        Luka Infeksi Penyakit Kulit & Alergi
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-yellow-500 text-2xl mr-3">✔</span>
                                        SPA Kaki Diabetes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold mb-4">
                        Reservasi Pelayanan kami sekarang Juga
                    </h2>
                    <p className="mb-8 text-lg">
                        Fams Care adalah Klinik Kesehatan Umum yang Menyediakan Berbagai
                        Layanan Kesehatan Untuk Masyarakat Dengan Mengutamakan Pelayanan
                        Yang Profesional, Modern dan Canggih.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-white text-blue-600  hover:text-green-500 font-bold px-6 py-3 rounded-lg shadow-lg flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-5 h-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7-7 7M5 5l7 7-7 7"
                                />
                            </svg>
                            Reservasi Sekarang !!!
                        </button>
                    </div>
                </div>
            </section>

            <section className="bg-[#FDFCFB] py-16 px-6">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Testimoni Dari Pelanggan Kami
                    </h2>
                    <p className="text-gray-600 mt-2">
                        Berikut beberapa ungkapan perasaan Customer kami yang sudah
                        menggunakan jasa kami:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {currentItems.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-yellow-500"
                            >
                                <div className="flex items-center space-x-4">
                                    <img
                                        src={testimonial.img}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full"
                                    />
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-800">
                                            {testimonial.name}
                                        </h3>
                                        <div className="flex space-x-1 text-yellow-500">
                                            {Array.from({ length: testimonial.rating }, (_, i) => (
                                                <svg
                                                    key={i}
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 fill-current"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.286 3.966c.3.922-.755 1.688-1.54 1.118L10 13.347l-3.388 2.46c-.785.57-1.84-.196-1.54-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.606 8.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z" />
                                                </svg>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 mt-4">{testimonial.feedback}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center items-center space-x-4 mt-6">
                        <button
                            onClick={handlePrevious}
                            className={`text-gray-600 hover:text-yellow-500 transition ${currentPage === 0 ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={currentPage === 0}
                        >
                            Previous
                        </button>
                        <div className="flex space-x-1">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <div
                                    key={i}
                                    className={`w-3 h-3 rounded-full ${i === currentPage ? "bg-green-500" : "bg-gray-300"
                                        }`}
                                ></div>
                            ))}
                        </div>
                        <button
                            onClick={handleNext}
                            className={`text-gray-600 hover:text-yellow-500 transition ${currentPage === totalPages - 1
                                ? "opacity-50 cursor-not-allowed"
                                : ""
                                }`}
                            disabled={currentPage === totalPages - 1}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">
                        GALERI FOTO ALUMNI PASIEN KAMI
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr1.jpg"
                                alt="Alumni 1"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 1
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr2.jpg"
                                alt="Alumni 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 2
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr3.jpg"
                                alt="Alumni 3"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 3
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr4.jpg"
                                alt="Alumni 4"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto px-4 text-center p-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr1.jpg"
                                alt="Alumni 1"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 1
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr2.jpg"
                                alt="Alumni 2"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 2
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr3.jpg"
                                alt="Alumni 3"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 3
                                </span>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <img
                                src="src/assets/img/glr4.jpg"
                                alt="Alumni 4"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white text-lg font-semibold">
                                    Alumni 4
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6">
                    <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
                        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">PAKET PRICE LIST PERAWATAN LUKA MODERN</h2>
                        <p className="mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">Dafta harga dibawah ini belum termasuk dengan biaya tambahan obat atau yang lain nya jika diperlukan.</p>
                    </div>
                    <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">

                        <div
                            className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Paket Luka Ringan</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400"> Paket ini cocok untuk perawatan luka kecil atau ringan seperti luka sayatan kecil, lecet, atau luka pasca operasi dengan tingkat komplikasi rendah. </p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">Rp.150.000</span>
                                <span className="text-gray-500 dark:text-gray-400">/tindakan</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Pembersihan luka.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Penggantian perban steril.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Edukasi perawatan luka di rumah.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Durasi layanan: 15-20 menit.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className=" text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-purple-900">Konsultasi Segera</a>
                        </div>

                        <div
                            className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Paket Luka Sedang</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Paket ini dirancang untuk luka dengan tingkat keparahan sedang, seperti luka diabetik tanpa komplikasi, luka bakar ringan.</p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">Rp.350.000</span>
                                <span className="text-gray-500 dark:text-gray-400">/tindakan</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Pembersihan luka mendalam.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Penggunaan bahan pembalut khusus foam dressing, hydrogel dll.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Monitoring tanda-tanda infeksi.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Edukasi perawatan lanjutan.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Durasi layanan: 30-45 menit</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Konsultasikan Segera</a>
                        </div>

                        <div
                            className="flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
                            <h3 className="mb-4 text-2xl font-semibold">Paket Luka Besar</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Paket ini ditujukan untuk luka kompleks atau berat, seperti luka dengan infeksi, luka kronis atau luka pasca operasi dengan komplikasi.</p>
                            <div className="flex items-baseline justify-center my-8">
                                <span className="mr-2 text-5xl font-extrabold">Rp.500.000</span>
                                <span className="text-gray-500 dark:text-gray-400">/tindakan</span>
                            </div>

                            <ul role="list" className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Pembersihan intensif dengan teknik modern.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Penggunaan bahan pembalut khusus untuk penyembuhan optimal.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Evaluasi kondisi luka oleh tenaga medis ahli.</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clipRule="evenodd"></path>
                                    </svg>
                                    <span>Konsultasi penyembuhan jangka panjang.</span>
                                </li>
                            </ul>
                            <a href="#"
                                className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900">Konsultasikan Segera</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Woundcare;