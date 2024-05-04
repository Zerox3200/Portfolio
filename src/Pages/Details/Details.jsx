import { Link } from 'react-router-dom';
import './Details.scss';
import { Helmet } from "react-helmet";
import FrontEnd from './Front-end/FrontEnd';
import MernStack from './Mern-Stack/MernStack';
import FrontEndMentor from './FrontEnd-Mentor/FrontEndMentor';
import ECommerce from './E-Commerce/ECommerce';

export default function Details() {
    return (
        <>
            <Helmet>
                <title>Project's Details</title>
            </Helmet>
            <section className='Details_nav row px-5 py-3'>
                <h1 className='h2 col-md-9'>Projects Details</h1>
                <div className="Details_nav_pt1 col-md-3 d-flex gap-2 align-items-center w-auto">
                    <Link to='/'>Home</Link>
                    <p>/ Porfolio details</p>
                </div>
            </section>
            <section className='Details'>
                <div className="ECommerce-Details">
                    <ECommerce />
                </div>
                <div className="FrontEnd-Details">
                    <FrontEnd />
                </div>
                <div className="MernStack-Details">
                    <MernStack />
                </div>
                <div className="FrontEndMentor-Details">
                    <FrontEndMentor />
                </div>
            </section>
        </>
    )
}
