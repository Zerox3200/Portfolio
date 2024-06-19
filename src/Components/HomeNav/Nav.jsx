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
import { motion } from 'framer-motion';
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

    return <>
        <SideNavButton />
        {ShowSide ? <div className="backdrop Show"></div> : <div className="backdrop Hide"></div>}
        <nav className={ShowSide ? 'Sidenav' : 'Nav'}>
            <div className="Nav_Intro">
                <motion.img src={PersonalePhoto} alt="Personal" loading='lazy'
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} />
                <h2>Ziad Ahmed</h2>
                <div className="Accounts">
                    <a href="https://www.facebook.com/ziad.ahmed.1481169/"
                        aria-label="Read more about Seminole's new baby mayor" target='_blank' rel='noreferrer'>
                        <FacebookIcon />
                    </a>
                    <a href="https://wa.me/+201030602579"
                        aria-label="Read more about Seminole's new baby mayor" target='_blank' rel='noreferrer'>
                        <WhatsAppIcon />
                    </a>
                    <a href="https://www.instagram.com/ziadahmedsalah3200?utm_source=qr&igsh=MTUyaGV5dXh2bmt5cA=="
                        aria-label="Read more about Seminole's new baby mayor"
                        target='_blank' rel='noreferrer'>
                        <InstagramIcon />
                    </a>
                    <a href="https://www.linkedin.com/in/ziad-ahmed-8118a4233"
                        aria-label="Read more about Seminole's new baby mayor" target='_blank' rel='noreferrer'>
                        <LinkedInIcon />
                    </a>
                </div>
                <div className="Links">
                    <p className={ActiveHome ? 'Active' : ''} onClick={() => scrollToSection('Intro')}><HomeOutlinedIcon /> Home</p>
                    <p className={ActiveAbout ? 'Active' : ''} onClick={() => scrollToSection('About')}><PersonOutlineOutlinedIcon /> About</p>
                    <p className={ActiveResume ? 'Active' : ''} onClick={() => scrollToSection('Resume')}><DescriptionOutlinedIcon /> Resume</p>
                    <p className={ActivePortfolio ? "Active" : ''} onClick={() => scrollToSection('Projects')}><PortraitIcon /> Portfolio</p>
                    <p className={ActiveService ? "Active" : ''} onClick={() => scrollToSection('Service')}><DisplaySettingsIcon /> Service</p>
                    <p className={ActiveContact ? "Active" : ''} onClick={() => scrollToSection('ContactUs')}><ContactMailOutlinedIcon /> Contact</p>
                    <Link to='Details'><GoProjectSymlink />Main Projects</Link >
                </div>
            </div>
            <div className="Nav_End">
                <p>Copy right@<b>IPortfolio</b></p>
                <p>Dev. <span>Ziad Ahmed</span></p>
            </div>
        </nav>
    </>
}

export default Nav;