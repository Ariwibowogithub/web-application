import { motion } from "framer-motion"


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

// eslint-disable-next-line react/prop-types
const Banner = ({ banner, heading, subheading, btn1Text, btn1Link }) => {
    return (
        <div className='gradientBg rounded-xl rounded-br-[80px] md:p-9 px-4 py-9'>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center gap-10'>
                {/* Banner Image */}
                <motion.div
                    variants={fadeIn("down", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}
                >
                    <img src={banner} alt="" className='lg:h-[386px] rounded-lg rounded-br-[80px]' />
                </motion.div>

                {/* Banner Content */}
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: false, amount: 0.7 }}

                    className="md:w-3/5">
                    <h2 className='md:text-7xl text-4xl font-bold text-white mb-6 leading-relaxed'>{heading}</h2>
                    <p className='text-[#EBEBEB] text-2xl mb-8'>{subheading}</p>
                    <div className='space-x-5 space-y-4'>
                        <a href={btn1Link} target="_blank" rel="noopener noreferrer" className="btnPrimary2">
                            {btn1Text}
                        </a>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Banner;