import './ContactUs.scss'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export default function ContactUs() {
    const ref = useRef();
    const InView = useInView(ref, { once: true })

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
    return (
        <section className='ContactUs' id='ContactUs'>
            <div className="ContactUs_Pt1 container">
                <h1 className='h3'>Contact Us</h1>
                <p>Feel free to reach out using the contact
                    form below or connect with me directly through
                    email or social media.
                    I'm committed to providing prompt and personalized responses,
                    so you can expect to hear back from me soon.
                </p>
            </div>
            <motion.div className="ContactUs_Pt2 container"
                initial={{ opacity: 0, y: 50 }} animate={InView && { opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: 'easeIn' }} ref={ref}>
                <div className="ContactUs_Pt2_Details">
                    <div className="Details_Location">
                        <LocationOnOutlinedIcon />
                        <div className="Details_Location_Description">
                            <h4>Location:</h4>
                            <span>8 Matar Street , ElNozha , Cairo</span>
                        </div>
                    </div>
                    <div className="Details_Email">
                        <EmailOutlinedIcon />
                        <div className="Details_Location_Description">
                            <h4>Location:</h4>
                            <span>ziadahmedsalah222 @gmail.com</span>
                        </div>
                    </div>
                    <div className="Details_Calling">
                        <PhoneAndroidOutlinedIcon />
                        <div className="Details_Location_Description">
                            <h4>Call:</h4>
                            <span>+201030602579</span>
                        </div>
                    </div>
                    <iframe title='Location'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d609.9755208657973!2d31.389439773890768!3d30.135898842632237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145816e7d1995455%3A0xdc8021ebadd57cfb!2zNDlQUStGSDTYjCDYp9mE2YfYp9mK2YPYs9iq2KjYjCDZgtiz2YUg2KfZhNmG2LLZh9ip2Iwg2YXYrdin2YHYuNipINin2YTZgtin2YfYsdip4oCsIDQ0NzMzMjM!5e0!3m2!1sar!2seg!4v1707235093225!5m2!1sar!2seg"
                        allowFullScreen=""
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <form onSubmit={formik.handleSubmit} ref={form}>
                    <div className="FormName">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id='name' name='name' className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.name && formik.touched.name ?
                            <span className='alert alert-danger'>{formik.errors.name}</span> : null}
                    </div>
                    <div className="FormEmail">
                        <label htmlFor="Email">Your Email</label>
                        <input type="text" id='Email' name='email' className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.errors.email && formik.touched.email ?
                            <span className='alert alert-danger'>{formik.errors.email}</span> : null}
                    </div>
                    <div className="FormPhone">
                        <label htmlFor="Phone">Phone</label>
                        <input type="text" id='Phone' name='phone' className='form-control'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} />
                        {formik.errors.phone && formik.touched.phone ?
                            <span className='alert alert-danger'>{formik.errors.phone}</span> : null}
                    </div>
                    <div className="FormMessage">
                        <label htmlFor="Message" className="form-label">Message</label>
                        <textarea className="form-control" name='message' id="Message" rows="3"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}></textarea>
                        {formik.errors.message && formik.touched.message ?
                            <span className='alert alert-danger'>{formik.errors.message}</span> : null}
                    </div>
                    <button disabled={!formik.isValid || !formik.dirty ? true : false} type='submit' className='btn text-light'>
                        Send Message
                    </button>
                </form>
            </motion.div>
        </section>
    )
}
