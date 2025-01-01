// eslint-disable-next-line no-unused-vars
import React from "react";

const About = () => {
    return (
        <div className="min-h-screen bg-white sm:px-28 lg:px-28">
            {/* Section 1: About Us */}
            <section className="bg-gray-50 py-20 px-4 sm:px-28 lg:px-28 min-h-screen flex items-center">
                <div className="container mx-auto max-w-7xl text-center">
                    <p className="font-sans font-semibold text-zinc-950 text-lg sm:text-xl">
                        Tentang Kami
                    </p>
                    <h2 className="font-bold mb-8 text-2xl sm:text-4xl lg:text-3xl text-backgroundColor leading-tight">
                        Our Mission is to{" "}
                        <span className="text-yellow-400">Provide Modern and Professional</span>{" "}
                        Health Services.
                    </h2>
                    <div className="flex flex-col md:flex-row justify-center gap-12">
                        <div className="w-full md:w-1/2">
                            <img
                                src="src/assets/img/gbr_hero2.png"
                                alt="About Image"
                                className="w-full h-auto object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="w-full md:w-1/2 text-left">
                            <h3 className="font-bold text-gray-700 mb-6 sm:mb-8 lg:mb-10 text-lg sm:text-xl">
                                Fams Care adalah Klinik Kesehatan{" "}
                                <span className="text-red-400 font-bold">No.1</span> Yang Modern dan
                                Canggih di Semarang.
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 mb-8">
                                Klinik Fams Care adalah klinik kesehatan yang mengutamakan inovasi
                                dan kualitas dalam memberikan layanan medis kepada masyarakat.
                                Dengan menggabungkan teknologi terkini dan pendekatan medis berbasis
                                bukti, Klinik Fams Care hadir sebagai pilihan utama untuk perawatan
                                kesehatan yang canggih dan modern.
                            </p>
                            <p className="text-base sm:text-lg text-gray-600">
                                <strong>Layanan Unggulan: Perawatan Luka Modern</strong>
                            </p>
                            <p className="text-base sm:text-lg text-gray-600">
                                Salah satu layanan unggulan di Klinik Fams Care adalah Perawatan
                                Luka Modern, yang dirancang untuk memberikan hasil optimal bagi
                                pasien dengan berbagai jenis luka, termasuk luka kronis, luka
                                diabetik, luka pasca operasi, dan luka bakar.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Join Us */}
            <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 flex items-center">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-2xl sm:text-2xl lg:text-2xl font-bold mb-4 mt-8">
                        MARI BERGABUNG DENGAN KAMI !!!
                    </h2>
                    <p className="mb-8 text-lg sm:text-xl lg:text-xl">
                        Fams Care adalah Klinik Kesehatan Umum yang Menyediakan Berbagai Layanan Kesehatan
                        Untuk Masyarakat Dengan Mengutamakan Pelayanan Yang Profesional, Modern dan Canggih.
                    </p>
                </div>
            </section>

            {/* Section 3: Our Excellence */}
            <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto text-center">
                    <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
                        KEUNGGULAN KLINIK KESEHATAN FAMS CARE
                    </h2>
                    <p className="mt-4 text-lg text-gray-600">
                        Kami berkomitmen untuk memberikan pelayanan terbaik dengan nilai-nilai
                        berikut yang kami pegang teguh dalam setiap langkah kami.
                    </p>
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: "fas fa-handshake",
                                title: "Integritas",
                                desc: "Kami percaya bahwa integritas adalah dasar dari setiap keputusan dan tindakan yang kami ambil.",
                            },
                            {
                                icon: "fas fa-lightbulb",
                                title: "Inovasi",
                                desc: "Kami terus mencari cara-cara baru untuk meningkatkan kualitas dan memberikan solusi terbaik.",
                            },
                            {
                                icon: "fas fa-users",
                                title: "Profesional",
                                desc: "Kami selalu berusaha untuk bekerja sama untuk mencapai tujuan bersama.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105"
                            >
                                <div className="flex justify-center mb-4">
                                    <i className={`${item.icon} text-4xl text-blue-500`}></i>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-700">{item.title}</h3>
                                <p className="mt-4 text-gray-500">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>


    );
};

export default About;