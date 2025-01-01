import { Stethoscope } from 'lucide-react'
import 'react'
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react'
import Swal from 'sweetalert2';
import { User } from 'lucide-react'
import { useNavigate } from "react-router-dom";


const Home = () => {

    const navigate = useNavigate();
    const doctorsList = [
        {
            name: "Dr. Metha",
            specialization: "Dokter Umum",
            experience: "10 years",
            availability: "Mon-wed, 9am-5pm"
        },
        {
            name: "Dr. Galang",
            specialization: "Dokter Umum",
            experience: "12 years",
            availability: "Thur-sat, 10am-6pm"
        },
        {
            name: "Dr. Dika",
            specialization: "Dr Anak",
            experience: "10 years",
            availability: "Tue-Fri, 8am-4pm"
        }
    ]

    const [, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        setSubmitted(true);
        const formData = new FormData(event.target);

        formData.append("access_key", "e94c9dc4-f965-4706-bdc1-4fcf17c1c327");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            Swal.fire({
                title: "Success",
                text: "Message sent Successfully",
                icon: "success"
            });
        }
    };
    return (
        <section className='min-h-screen bg-gray-50 pt-12 py-16 sm:px-28 lg:px-28 relative'>
            <div className='container mx-auto px-6'>
                {/* hero Section */}
                <div className='text-center py-20 flex flex-col items-center justify-center'>
                    <div className='animated-container'>
                        <h1 className='text-5xl font-bold text-blue-800 mb-6 animate-fade-in'>
                            Your Health, our Priority
                        </h1>
                        <p className='text-xl text-gray-600 mb-8 animate-fade-in delay-1'>
                            Pelayanan Kesehatan Komprehensif dengan Rasa Kasih Sayang
                        </p>
                    </div>
                    {/* 24/7 Section */}
                    <div className='inline-block mb-8'>
                        <div className='flex items-center justify-center space-x-2 rounded-full px-4 md:px-6 py-2 md:py-3 shadow-lg backdrop-blur-xl'>
                            <span className='relative flex h-2 md:h-3 w-2 md:w-3'>
                                <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75'></span>
                                <span className='relative inline-flex rounded-full h-2 md:h-3 w-2 md:w-3 bg-blue-500'></span>
                            </span>
                            <span className='bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-grotesk text-sm md:text-base font-semibold'>
                                24/7 Support Available
                            </span>
                        </div>
                    </div>
                    <a onClick={() => navigate("/appoinment")}
                        className='bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700/20 transition text-lg mt-4'>
                        Book Appointemnt
                    </a>
                </div>

                {/* Services section */}
                <section className='grid md:grid-cols-3 gap-6'>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Holistic Care</h3>
                        <p className='text-gray-600'>Pengobatan Kesehatan tradisonal</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>General Treatment</h3>
                        <p className='text-gray-600'>Pelayanan Pemeriksaan Umum</p>
                    </div>
                    <div className='bg-white p-6 rounded-lg shadow-md text-center'>
                        <Stethoscope className='mx-auto text-blue-600 mb-4' size={48} />
                        <h3 className='text-xl font-semibold text-gray-800 mb-3'>Emergency Support</h3>
                        <p className='text-gray-600'>Layanan medis darurat 24/7</p>
                    </div>
                </section>

                {/* Testimonials Section */}
                <section className='bg-white p-10 rounded-lg shadow-lg'>
                    <h2 className='text-3xl font-bold text-center mb-10 text-gray-800'>Patient Testimonials</h2>
                    <div className='grid md:grid-cols-2 gap-8'>
                        {/* Testimonial Card 1 */}
                        <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
                            <p className='italic text-gray-600 mb-4 text-lg'>Exceptional care and compassionate doctots. I felt truly heard and supported.</p>
                            <p className='font-semibold text-gray-800'>- Anand</p>
                        </div>
                        {/* Testimonial Card 2 */}
                        <div className='bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105'>
                            <p className='italic text-gray-600 mb-4 text-lg'>Professional, efficient, and very friendly staff. Highly recommended!</p>
                            <p className='font-semibold text-gray-800'>- Doni</p>
                        </div>

                    </div>
                </section>

                {/* dokter list */}

                <section className=' bg-gray-50 pt-10 py-16 px-4 sm:px-6 lg:px-8 relative'>
                    <div className='container mx-auto px-4'>
                        <h1 className='text-4xl text-gray-800 font-bold text-center mb-12'>Our Doctors</h1>
                        <div className='grid md:grid-cols-3 gap-8'>
                            {doctorsList.map((doctor, index) => (
                                <div key={index} className='bg-white rounded-lg shadow-md p-6 text-center'>
                                    <User className='mx-auto text-blue-600 mb-4' size={64} />
                                    <h3 className='text-xl font-semibold'>{doctor.name}</h3>
                                    <p className='text-gray-600 mb-2'>{doctor.specialization}</p>
                                    <p className='text-sm text-gray-500 mb-4'>Experience: {doctor.experience}</p>
                                    <p className='text-sm text-gray-500 mb-4'>Availability: {doctor.availability}</p>
                                    <a onClick={() => navigate("/appoinment")}
                                        className='bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700/20 transition'>
                                        Book Appointment
                                    </a>
                                </div>
                            ))}
                        </div>

                    </div>
                </section>

                {/* Contact Clinic */}

                <section className=' bg-gray-50 p-10 sm:px-6 lg:px-8'>
                    <div className='container mx-auto px-4'>
                        <div className='grid md:grid-cols-2 gap-8'>
                            {/* contact form */}
                            <div className='bg-white rounded-lg shadow-md p-8'>
                                <h2 className='text-3xl text-gray-800 font bold mb-8'>contact Us</h2>
                                <form onSubmit={onSubmit}>
                                    <div className='mb-4'>
                                        <label className='block text-gray-800 mb-2'>Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            onChange={handleChange}
                                            className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-800 mb-2'>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            onChange={handleChange}
                                            className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-800 mb-2'>Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            onChange={handleChange}
                                            className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                    </div>
                                    <div className='mb-4'>
                                        <label className='block text-gray-800 mb-2'>Message</label>
                                        <textarea
                                            name="message"
                                            required
                                            onChange={handleChange}
                                            className='w-full px-3 py-2 border rounded-md bg-white text-black' />
                                    </div>
                                    <button type='submit'
                                        className='w-full bg-blue-600 text-white py-3 rounded-full hover:bg-blue-700 transition'>
                                        Send Message
                                    </button>
                                </form>
                            </div>

                            {/* contact infor */}
                            <div className='bg-white text-gray-800 rounded-lg shadow-md p-8'>
                                <h2 className='text-3xl font-bold mb-8'>Clinic Information</h2>
                                <div className='space-y-4'>
                                    <div className='flex items-center'>
                                        <MapPin className='text-blue-600 mr-4' size={32} />
                                        <p className='text-gray-800'>Jalan Tentara Pelajar No.113 Ungaran Kab. Semarang</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Phone className='text-blue-600 mr-4' size={32} />
                                        <p className='text-gray-800'>(0857) 8403-8435</p>
                                    </div>
                                    <div className='flex items-center'>
                                        <Mail className='text-blue-600 mr-4' size={32} />
                                        <p className='text-gray-800'>famscare@gmail.com</p>
                                    </div>
                                </div>
                                {/* Map Placeholder */}
                                <div className='mt-8 bg-gray-200 h-64 flex items-center justify-center rounded-lg overflow-hidden'>
                                    <iframe
                                        title="Google Maps Location"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.8501942651606!2d110.41293107454418!3d-7.143315670070413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708789ad7db809%3A0xc45d23c865e0efa!2sFams%20Care%20Sunat%20Klamp%20Ungaran%20Semarang!5e0!3m2!1sid!2sid!4v1735715320905!5m2!1sid!2sid"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy">
                                    </iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </section>




    )
}

export default Home;