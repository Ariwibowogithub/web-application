import "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Blob from "../../assets/blob.svg";
import HeroPng from "../../assets/hero2.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaNotesMedical } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";

import BannerPng from "../../assets/banner3.png";
import { GrUserExpert } from "react-icons/gr";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaBookReader } from "react-icons/fa";

export const FadeUp = (delay) => {
    return {
        initial: {
            opacity: 0,
            y: 50,
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                duration: 0.5,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};

const ServicesData = [
    {
        id: 1,
        title: "Medical consultation",
        link: "#",
        icon: <FaNotesMedical />,
        delay: 0.2,
    },
    {
        id: 2,
        title: "Medical treatment",
        link: "#",
        icon: <FaNotesMedical />,
        delay: 0.3,
    },
    {
        id: 3,
        title: "Medical advice",
        link: "#",
        icon: <FaNotesMedical />,
        delay: 0.4,
    },
    {
        id: 4,
        title: "Medical diagnosis",
        link: "#",
        icon: <FaNotesMedical />,
        delay: 0.5,
    },
    {
        id: 5,
        title: "Medical records",
        link: "#",
        icon: <FaNotesMedical />,
        delay: 0.6,
    },
    {
        id: 6,
        title: "24/7 support",
        link: "#",
        icon: <BiSupport />,
        delay: 0.7,
    },
];

const SlideLeft = (delay) => {
    return {
        initial: {
            opacity: 0,
            x: 50,
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.3,
                delay: delay,
                ease: "easeInOut",
            },
        },
    };
};


const Hypno = () => {
    const navigate = useNavigate();
    return (
        <div className="">
            <section className="bg-light overflow-hidden relative min-h-screen pt-12 py-16  sm:px-40 lg:px-40 ">
                <div className="container grid grid-cols-1 md:grid-cols-2 ">
                    {/* Brand Info */}
                    <div className="flex flex-col justify-center py-14 md:py-0 relative z-20">
                        <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
                            <motion.h1
                                variants={FadeUp(0.6)}
                                initial="initial"
                                animate="animate"
                                className="text-3xl lg:text-5xl font-bold !leading-snug"
                            >
                                Unlock Your Potential with  {""}
                                <span className="text-secondary">Hypnotherapy</span>
                            </motion.h1>
                            <motion.div
                                variants={FadeUp(0.8)}
                                initial="initial"
                                animate="animate"
                                className="flex justify-center md:justify-start"
                            >
                                <button
                                    className="bg-blue-500 text-white font-semibold py-2 px-4 ml-24 rounded-lg flex items-center gap-2 group hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition-all duration-300"
                                    onClick={() => navigate("/appoinment")}
                                >
                                    Get to know
                                    <IoIosArrowRoundForward className="text-xl transform group-hover:translate-x-2 group-hover:-rotate-45 transition-transform duration-300" />
                                </button>

                            </motion.div>
                        </div>
                    </div>

                    {/* Hero Image */}
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                            src={HeroPng}
                            alt=""
                            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
                        />
                        <motion.img
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                            src={Blob}
                            alt=""
                            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
                        />
                    </div>
                </div>
            </section>

            <section className="bg-white">
                <div className="container pb-14 pt-16">
                    <h1 className="text-4xl font-bold text-left pb-10">
                        Services we provide
                    </h1>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
                        {ServicesData.map((service, index) => (
                            <motion.div
                                key={service.id || index} // Gunakan properti `id` atau fallback ke `index` jika tidak ada `id`
                                variants={SlideLeft(service.delay)}
                                initial="initial"
                                whileInView={"animate"}
                                viewport={{ once: true }}
                                className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
                            >
                                <div className="text-4xl mb-4"> {service.icon}</div>
                                <h1 className="text-lg font-semibold text-center px-3">
                                    {service.title}
                                </h1>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                    {/* Banner Image */}
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            src={BannerPng}
                            alt=""
                            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                        />
                    </div>
                    {/* Banner Text */}
                    <div className="flex flex-col justify-center">
                        <div className="text-center md:text-left space-y-12">
                            <motion.h1
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="text-3xl md:text-4xl font-bold !leading-snug"
                            >
                                Menuju Kebahagiaan Dengan <span className="text-secondary">Hypnotherapy</span>
                            </motion.h1>
                            <div className="flex flex-col gap-6">
                                <motion.div
                                    variants={FadeUp(0.2)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                                >
                                    <FaBookReader className="text-2xl" />
                                    <p className="text-lg">Service Quality</p>
                                </motion.div>
                                <motion.div
                                    variants={FadeUp(0.4)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                                >
                                    <GrUserExpert className="text-2xl" />
                                    <p className="text-lg">Expert Team</p>
                                </motion.div>
                                <motion.div
                                    variants={FadeUp(0.6)}
                                    initial="initial"
                                    whileInView={"animate"}
                                    viewport={{ once: true }}
                                    className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
                                >
                                    <MdOutlineAccessTime className="text-2xl" />
                                    <p className="text-lg">Fast Response</p>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
                    {/* Banner Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
                            <h1 className="text-4xl font-bold !leading-snug">
                                Percayakan Hidupmu ke <span className="text-secondary">Hypnotherapy</span>
                            </h1>
                            <p className="text-dark2">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Recusandae iusto minima ad ut id eos accusantium aut, aperiam quis
                                incidunt!
                            </p>

                        </div>
                    </motion.div>
                    {/* Banner Image */}
                    <div className="flex justify-center items-center">
                        <motion.img
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            src={BannerPng}
                            alt=""
                            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
                        />
                    </div>
                </div>
            </section>




        </div>

    )
}
export default Hypno;