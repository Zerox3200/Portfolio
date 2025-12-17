import './ContactUs.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactUs() {
    const ref = useRef();
    const InView = useInView(ref, { once: true });
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                staggerChildren: 0.1,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                type: "spring",
                stiffness: 50,
                damping: 15
            }
        }
    };

    const Validation = Yup.object({
        name: Yup.string().min(5, 'Min Length of name is 5').max(15, 'Max Length of name is 15').required("Name is required"),
        email: Yup.string().email("Email Ex(Name123@mail.com)").required("Email is required"),
        phone: Yup.string().matches(/^01[0125]\d{8}$/, "Add Egyption number please").required("Phone is required"),
        message: Yup.string().required("Message is required")
    })
    const form = useRef();

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            message: ""
        }, validationSchema: Validation,
        onSubmit: () => {
            emailjs.sendForm('service_ytedj8q', 'template_49o8m3f', form.current, {
                publicKey: 'EZs2A8HuNHHUQa3cu',
            }, {
                name: formik.values.name,
                email: formik.values.email,
                phone: formik.values.phone
            })
                .then(
                    () => {
                        Swal.fire({
                            icon: "success",
                            title: "Your email is sent and I'll reach you very soon",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        }
    })
    const contactInfo = [
        {
            icon: <LocationOnOutlinedIcon />,
            title: 'Location',
            value: '8 Matar Street , ElNozha , Cairo',
            color: '#667eea'
        },
        {
            icon: <EmailOutlinedIcon />,
            title: 'Email',
            value: 'ziadahmedsalah222@gmail.com',
            color: '#f5576c'
        },
        {
            icon: <PhoneAndroidOutlinedIcon />,
            title: 'Call',
            value: '+201030602579',
            color: '#4facfe'
        }
    ];

    return (
        <motion.section
            className='ContactUs'
            id='ContactUs'
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={InView && "visible"}
        >
            {/* Contact Background Elements */}
            <motion.div
                className="contact-background"
                style={{ y }}
                aria-hidden="true"
            >
                <div className="bg-orb orb-1"></div>
                <div className="bg-orb orb-2"></div>
                <div className="bg-orb orb-3"></div>
                <div className="floating-particles">
                    {[...Array(10)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="particle"
                            animate={{
                                y: [0, -90, 0],
                                x: [0, Math.random() * 40 - 20, 0],
                                opacity: [0.2, 0.6, 0.2],
                                scale: [0.4, 0.9, 0.4],
                                rotate: [0, 180, 360],
                            }}
                            transition={{
                                duration: 6 + i * 0.3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: i * 0.25,
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                        >
                            {['📧', '💬', '📱', '📍', '✉️', '🌐', '💼', '🎯', '✨', '🚀'][i % 10]}
                        </motion.div>
                    ))}
                </div>
                <div className="grid-overlay"></div>
            </motion.div>

            <div className="container">
                <motion.div
                    className="ContactUs_Pt1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={InView && { opacity: 1, scale: 1 }}
                    transition={{ duration: 1, type: "spring", stiffness: 50 }}
                >
                    <motion.div
                        className="title-container"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={InView && { opacity: 1, scale: 1 }}
                        transition={{ duration: 1, type: "spring", stiffness: 50 }}
                    >
                        <motion.h2
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            Get In Touch
                        </motion.h2>
                        <motion.div
                            className="title-underline"
                            initial={{ scaleX: 0 }}
                            animate={InView && { scaleX: 1 }}
                            transition={{ duration: 1.2, delay: 0.6 }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={InView && { opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="contact-intro"
                    >
                        Feel free to reach out using the contact form below or connect with me directly through
                        email or social media. I'm committed to providing prompt and personalized responses,
                        so you can expect to hear back from me soon.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="ContactUs_Pt2"
                    variants={itemVariants}
                >
                    <motion.div
                        className="ContactUs_Pt2_Details"
                        variants={itemVariants}
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={info.title}
                                className={`Details_${info.title === 'Location' ? 'Location' : info.title === 'Email' ? 'Email' : 'Calling'}`}
                                variants={itemVariants}
                                whileHover={{
                                    scale: 1.05,
                                    y: -5,
                                    transition: { duration: 0.3 }
                                }}
                            >
                                <motion.div
                                    className="icon-wrapper"
                                    style={{ '--icon-color': info.color }}
                                    animate={{
                                        y: [0, -6, 0],
                                        rotate: [0, 3, -3, 0],
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2,
                                    }}
                                >
                                    {info.icon}
                                </motion.div>
                                <div className="Details_Location_Description">
                                    <h4>{info.title}:</h4>
                                    <span>{info.value}</span>
                                </div>
                            </motion.div>
                        ))}
                        <motion.div
                            className="map-container"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <iframe
                                title='Location'
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.9755208657973!2d31.389439773890768!3d30.135898842632237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816e7d1995455%3A0xdc8021ebadd57cfb!2zNDlQUStGSDTYjCDYp9mE2YfYp9mK2YPYs9iq2KjYjCDZgtiz2YUg2KfZhNmG2LLZh9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NzMzMjM!5e0!3m2!1sar!2seg!4v1707235093225!5m2!1sar!2seg"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </motion.div>
                    </motion.div>

                    <motion.form
                        onSubmit={formik.handleSubmit}
                        ref={form}
                        variants={itemVariants}
                        whileHover={{ scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 80, damping: 14 }}
                    >
                        <motion.div
                            className="FormName"
                            variants={itemVariants}
                        >
                            <label htmlFor="name">Your Name</label>
                            <input
                                type="text"
                                id='name'
                                name='name'
                                className='form-control'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Enter your full name"
                            />
                            {formik.errors.name && formik.touched.name ?
                                <span className='alert alert-danger'>{formik.errors.name}</span> : null}
                        </motion.div>

                        <motion.div
                            className="FormEmail"
                            variants={itemVariants}
                        >
                            <label htmlFor="Email">Your Email</label>
                            <input
                                type="text"
                                id='Email'
                                name='email'
                                className='form-control'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="your.email@example.com"
                            />
                            {formik.errors.email && formik.touched.email ?
                                <span className='alert alert-danger'>{formik.errors.email}</span> : null}
                        </motion.div>

                        <motion.div
                            className="FormPhone"
                            variants={itemVariants}
                        >
                            <label htmlFor="Phone">Phone</label>
                            <input
                                type="text"
                                id='Phone'
                                name='phone'
                                className='form-control'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="01XXXXXXXXX"
                            />
                            {formik.errors.phone && formik.touched.phone ?
                                <span className='alert alert-danger'>{formik.errors.phone}</span> : null}
                        </motion.div>

                        <motion.div
                            className="FormMessage"
                            variants={itemVariants}
                        >
                            <label htmlFor="Message" className="form-label">Message</label>
                            <textarea
                                className="form-control"
                                name='message'
                                id="Message"
                                rows="5"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                placeholder="Tell me about your project..."
                            />
                            {formik.errors.message && formik.touched.message ?
                                <span className='alert alert-danger'>{formik.errors.message}</span> : null}
                        </motion.div>

                        <motion.button
                            disabled={!formik.isValid || !formik.dirty ? true : false}
                            type='submit'
                            className='btn-submit'
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            variants={itemVariants}
                        >
                            <span>Send Message</span>
                            <motion.span
                                className="btn-glow"
                                animate={{
                                    opacity: [0.3, 0.8, 0.3],
                                    scale: [1, 1.2, 1],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                        </motion.button>
                    </motion.form>
                </motion.div>
            </div>
        </motion.section>
    )
}
