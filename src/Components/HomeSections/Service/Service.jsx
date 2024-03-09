import { Services } from './SercieFile';
import './Service.scss';
import ServiceType from './Services/ServiceType';

export default function Service() {
    return (
        <section className='Service container' id='Service'>
            <h1 className='h3 Service_title'>Service</h1>
            <p>Whether you need a sleek portfolio website, an engaging web application,
                or customized web development services tailored to your unique requirements,
                I'm here to turn your vision into reality. Let's collaborate and bring your ideas to real life!
            </p>
            <div className="Services">
                {Services.map((Ser, index) =>
                    <ServiceType key={index}
                        Description={Ser.Desc}
                        Title={Ser.Title}
                        Icons={Ser.Icon}
                        Delay={Ser.Delay}
                    />)
                }
            </div>
        </section>
    )
}
