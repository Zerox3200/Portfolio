import Nav from '../../Components/HomeNav/Nav';
import About from '../../Components/HomeSections/About/About';
import ContactUs from '../../Components/HomeSections/ContactUs/ContactUs';
import Intro from '../../Components/HomeSections/Intro/Intro';
import Projects from '../../Components/HomeSections/Projects/Projects';
import Resume from '../../Components/HomeSections/Resume/Resume';
import Service from '../../Components/HomeSections/Service/Service';
import Skills from '../../Components/HomeSections/Skills/Skills';
import './Home.scss'
import { useEffect, useState } from 'react';
import Loading from '../../Components/Loading/Loading';

function Home() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500);
    }, []);
    return (
        <>
            {!isLoading ?
                <>
                    <Nav />
                    <section className="Home">
                        <Intro />
                        <About />
                        <Skills />
                        <Resume />
                        <Projects />
                        <Service />
                        <ContactUs />
                    </section>
                </> : <Loading />}
        </>

    );
}

export default Home;