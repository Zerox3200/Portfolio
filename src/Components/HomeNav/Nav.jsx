import './Nav.scss'
import PersonalePhoto from './../../Images/IMG-20240619-WA0009.jpg';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import PortraitIcon from '@mui/icons-material/Portrait';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import { useContext, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoProjectSymlink } from "react-icons/go";
import { Link } from 'react-router-dom';
import SideNavButton from '../SideNavButton/SideNavButton';
import { SideNav } from '../../Context/Context';

function Nav() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const [ActiveHome, setActiveHome] = useState(false);
    const [ActiveAbout, setActiveAbout] = useState(false);
    const [ActiveResume, setActiveResume] = useState(false);
    const [ActivePortfolio, setActivePortfolio] = useState(false);
    const [ActiveService, setActiveService] = useState(false);
    const [ActiveContact, setActiveContact] = useState(false);
    const { ShowSide } = useContext(SideNav);

    const ActivationHandler = (Sing) => {
        const filters = {
            "Intro": { Intro: true, About: false, Resume: false, Portfolio: false, Service: false, Contact: false },
            "About": { Intro: false, About: true, Resume: false, Portfolio: false, Service: false, Contact: false },
            "Resume": { Intro: false, About: false, Resume: true, Portfolio: false, Service: false, Contact: false },
            "Portfolio": { Intro: false, About: false, Resume: false, Portfolio: true, Service: false, Contact: false },
            "Service": { Intro: false, About: false, Resume: false, Portfolio: false, Service: true, Contact: false },
            "Contact": { Intro: false, About: false, Resume: false, Portfolio: false, Service: false, Contact: true },
        };

        const { Intro, About, Resume, Portfolio, Service, Contact } = filters[Sing];

        setActiveHome(Intro);
        setActiveAbout(About);
        setActiveResume(Resume);
        setActivePortfolio(Portfolio);
        setActiveService(Service);
        setActiveContact(Contact)
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset <= 988) {
                ActivationHandler('Intro');
                return;
            }
            if (window.pageYOffset >= 988 && window.pageYOffset <= 2287) {
                ActivationHandler('About');
                return;
            }
            if (window.pageYOffset >= 2287 && window.pageYOffset <= 3560) {
                ActivationHandler("Resume")
                return;
            }
            if (window.pageYOffset >= 3560 && window.pageYOffset <= 5229) {
                ActivationHandler("Portfolio")
                return;
            }
            if (window.pageYOffset >= 5229 && window.pageYOffset <= 5900) {
                ActivationHandler("Service");
                return;
            }
            if (window.pageYOffset >= 5900) {
                ActivationHandler("Contact");
                return;
            }
        });

        return () => {
            window.removeEventListener('scroll', () => { });

        };
    }, []);

    const navVariants = {
        hidden: { x: -300, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.1
            }
        },
        exit: {
            x: -300,
            opacity: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            }
        }
    };

    const itemVariants = {
        hidden: { x: -50, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20
            }
        }
    };

    const profileVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2
            }
        }
    };

    return <>
        <SideNavButton />
        <AnimatePresence>
            {ShowSide && (
                <motion.div
                    className="backdrop Show"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                />
            )}
        </AnimatePresence>

        <motion.nav
            className={ShowSide ? 'Sidenav' : 'Nav'}
            variants={navVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="Nav_Intro">
                {/* Profile Section */}
                <motion.div
                    className="profile-section"
                    variants={profileVariants}
                >
                    <motion.div
                        className="profile-image-container"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.img
                            src={PersonalePhoto}
                            alt="Personal"
                            loading='lazy'
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                        />
                        <div className="profile-glow"></div>
                    </motion.div>

                    <motion.h2
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        Ziad Ahmed
                    </motion.h2>

                    <motion.p
                        className="profile-subtitle"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        Full Stack Developer
                    </motion.p>
                </motion.div>

                {/* Social Accounts */}
                <motion.div
                    className="Accounts"
                    variants={itemVariants}
                >
                    <motion.a
                        href="https://www.facebook.com/ziad.ahmed.1481169/"
                        aria-label="Facebook Profile"
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <FacebookIcon />
                    </motion.a>
                    <motion.a
                        href="https://wa.me/+201030602579"
                        aria-label="WhatsApp Contact"
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <WhatsAppIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.instagram.com/ziadahmedsalah3200?utm_source=qr&igsh=MTUyaGV5dXh2bmt5cA=="
                        aria-label="Instagram Profile"
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <InstagramIcon />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/ziad-ahmed-8118a4233"
                        aria-label="LinkedIn Profile"
                        target='_blank'
                        rel='noreferrer'
                        whileHover={{ scale: 1.1, y: -5 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <LinkedInIcon />
                    </motion.a>
                </motion.div>

                {/* Navigation Links */}
                <motion.div
                    className="Links"
                    variants={itemVariants}
                >
                    <motion.p
                        className={ActiveHome ? 'Active' : ''}
                        onClick={() => scrollToSection('Intro')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <HomeOutlinedIcon />
                        <span>Home</span>
                        {ActiveHome && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>

                    <motion.p
                        className={ActiveAbout ? 'Active' : ''}
                        onClick={() => scrollToSection('About')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <PersonOutlineOutlinedIcon />
                        <span>About</span>
                        {ActiveAbout && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>

                    <motion.p
                        className={ActiveResume ? 'Active' : ''}
                        onClick={() => scrollToSection('Resume')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <DescriptionOutlinedIcon />
                        <span>Resume</span>
                        {ActiveResume && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>

                    <motion.p
                        className={ActivePortfolio ? "Active" : ''}
                        onClick={() => scrollToSection('Projects')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <PortraitIcon />
                        <span>Portfolio</span>
                        {ActivePortfolio && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>

                    <motion.p
                        className={ActiveService ? "Active" : ''}
                        onClick={() => scrollToSection('Service')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <DisplaySettingsIcon />
                        <span>Service</span>
                        {ActiveService && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>

                    <motion.p
                        className={ActiveContact ? "Active" : ''}
                        onClick={() => scrollToSection('ContactUs')}
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <ContactMailOutlinedIcon />
                        <span>Contact</span>
                        {ActiveContact && <motion.div className="active-indicator" layoutId="activeIndicator" />}
                    </motion.p>
                    {/* 
                    <motion.div
                        whileHover={{ x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Link to='Details' className="main-projects-link">
                            <GoProjectSymlink />
                            <span>Main Projects</span>
                            <motion.div
                                className="link-glow"
                                whileHover={{ scale: 1.2 }}
                                transition={{ duration: 0.3 }}
                            />
                        </Link>
                    </motion.div> */}
                </motion.div>
            </div>

            <motion.div
                className="Nav_End"
                variants={itemVariants}
            >
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    Copy right@<b>IPortfolio</b>
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                >
                    Dev. <span>Ziad Ahmed</span>
                </motion.p>
            </motion.div>
        </motion.nav>
    </>
}

export default Nav;