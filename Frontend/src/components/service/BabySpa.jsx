import { motion } from "framer-motion";
// variants

import banner from './home.jpg'
import Banner from "./Banner"



// eslint-disable-next-line react-refresh/only-export-components
export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            opacity: 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "tween",
                duration: 1.2,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
};


const BabySpa = () => {

    const packages = [
        {
            name: "Baby Treatment Fit",
            description: "Berikut Layanan yang akan didapatkan :",
            green: "/src/assets/green.png",
            features: ["Baby Massage", "Baby Spa", "Baby Haircut", "Baby Care"],
            whatsappLink: "https://wa.me/6285742543780"
        },
        {
            name: "Preanatal Treatment",
            description: "Berikut Layanan yang akan didapatkan :",
            green: "/src/assets/green.png",
            features: ["Pijat Ibu Hamil", "Prenatal Yoga", "Pijat Induksi", "dst"],
            whatsappLink: "https://wa.me/6285742543780"
        },
        {
            name: "Postnatal Treatment",
            description: "Berikut Layanan yang akan didapatkan :",
            green: "/src/assets/green.png",
            features: ["Pijat Ibu Nifas", "Pijat Laktasi", "Pijat Oksitoksin", "dst"],
            whatsappLink: "https://wa.me/6285742543780"
        },
    ];
    return (
        <div className="min-h-screen bg-white sm:px-44 lg:px-44">
            <section>
                <div className="md:px-12 p-4 max-w-screen-2xl mx-auto mt-24" id="home">
                    <Banner
                        banner={banner}
                        heading="FamsCare Mom and Baby Care"
                        subheading="Cinta dan Perawatan Terbaik untuk Ibu dan Bayi Anda."
                        btn1Text="Reservasi Lewat Whatsapp"
                        btn1Link="https://wa.me/6285742543780"
                    />
                </div>
            </section>

            <section className="py-20 px-4 sm:px-28 lg:px-28 min-h-screen flex items-center">
                <div className="md:px-14 p-4 max-w-s mx-auto space-y-10" id="about">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}
                            className="md:w-1/2">
                            <img src="/src/assets/about6.jpg" alt="" className="rounded-lg" />
                        </motion.div>

                        {/* about content */}
                        <motion.div
                            variants={fadeIn("left", 0.3)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className="md:w-2/5">
                            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Apa itu FamsCare <span className="text-secondary">Mom and Baby Care?</span></h2>
                            <p className="text-tartiary text-lg mb-7">Jadi FamsCare Mom and Baby Care adalah layanan yang memfokuskan layanan untuk ibu yang bingung harus apa saja saat maupun sesudah kelahiran dan treatment bayi yang sudah lahir maupun balita atau sampai 12 bulan.</p>
                            {/* <button className="btnPrimary">Get Started</button> */}
                        </motion.div>
                    </div>

                    {/* 2nd part */}
                    <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-8">
                        <motion.div
                            variants={fadeIn("up", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className="md:w-1/2">
                            <img src="/src/assets/about5.jpg" alt="" className="rounded-lg" />
                        </motion.div>

                        {/* about content */}
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}

                            className="md:w-2/5">
                            <h2 className="md:text-5xl text-3xl font-bold text-primary mb-5 leading-normal">Kapan sih FamsCare  <span className="text-secondary">Mom and Baby Care bisa dihubungi?</span></h2>
                            <p className="text-tartiary text-lg mb-7">Klinik buka dari jam 08:00 s/d 18:00 WIB</p>
                            {/* <button className="btnPrimary">Get Started</button> */}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 1: About Us */}
            <section className="bg-gray-50 py-20 px-4 sm:px-28 lg:px-28 min-h-screen flex items-center">
                <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
                    <div className="text-center">
                        <h2 className="md:text-5xl text-3xl font-extrabold text-primary mb-2">Paket Yang Tersedia</h2>
                        <p className="text-tartiary md:w-1/3 mx-auto px-4">
                            Pilih paket terbaik untuk kebutuhan Anda!
                        </p>
                    </div>

                    {/* Pricing cards */}
                    <motion.div
                        variants={fadeIn("up", 0.2)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: false, amount: 0.5 }}
                        className="grid sm-grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
                    >
                        {packages.map((pkg, index) => (
                            <div
                                key={index}
                                className="border py-10 md:px-6 px-4 rounded-lg shadow-3xl"
                            >
                                <h3 className="text-3xl font-bold text-center text-primary">
                                    {pkg.name}
                                </h3>
                                <p className="text-tartiary text-center my-5">
                                    {pkg.description}
                                </p>
                                <ul className="mt-4 space-y-2 px-4">
                                    {pkg.features.map((feature, i) => (
                                        <li key={i} className="flex gap-3 items-center">
                                            <img
                                                src={pkg.green}
                                                alt=""
                                                className="w-4 h-4"
                                            />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="w-full mx-auto mt-8 flex items-center justify-center">
                                    <a
                                        href={pkg.whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btnPrimary2"
                                    >
                                        Reservation Right Now
                                    </a>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>


    )
}
export default BabySpa;