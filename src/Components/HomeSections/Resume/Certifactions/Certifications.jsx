import './Certifications.scss';
import { TotalCertifications } from './CertificationsFile';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import Swal from 'sweetalert2';

export default function Certifications() {
    const CertifacteDetails = (Title, Img, Desc, Desc_Details, Skills, Skills_Details) => {
        let Details = Object.entries(Skills_Details)
        Swal.fire({
            showConfirmButton: false,
            backdrop: 'rgb(62 155 219 / 39%)',
            html: `
                    <div class="Inside_Sweet">
                          <img src="${Img}" alt="Image" style="max-width: 100%; height: auto;">
                          <div class="Inside_Sweet_description">
                                <h1 class='h4'>${Title}</h1>
                                <p>${Desc}</p>
                                <p>${Desc_Details}</p>
                                <ul>
                                    <li>${Skills[0]} </li>
                                    <li>${Skills[1]} </li>
                                    <li>${Skills[2]} </li>
                                    <li>${Skills[3]} </li>
                                    <li>${Skills[4]} </li>
                                </ul>
                                <p><b>${Skills[0]}</b>: ${Details[0][1]}</p>
                                <p><b>${Skills[1]}</b>: ${Details[1][1]}</p>
                                <p><b>${Skills[2]}</b>: ${Details[2][1]}</p>
                                <p><b>${Skills[3]}</b>: ${Details[3][1]}</p>
                                <p><b>${Skills[4]}</b>: ${Details[4][1]}</p>
                           </div>
                    </div>
             `,
            customClass: {
                popup: 'SweetDetails',
                closeButton: "Close"
            },
            showCloseButton: true
        });
    }
    return (
        <div className='Certifications'>
            {TotalCertifications.map((Certification, index) => (
                <div className="Certifications_pts" key={index}>
                    <h1 className='h5'>{Certification.Title}</h1>
                    <p>{Certification.Desc}</p>
                    <div
                        className={`Certification ${Certification.Type}`}
                        onClick={() =>
                            CertifacteDetails(Certification.Title,
                                Certification.img, Certification.Desc,
                                Certification.Details.Details_Desc,
                                Certification.Details.Skills,
                                Certification.Details.KeyPoints
                            )}
                    >
                        <ZoomInIcon />
                    </div>
                </div>
            ))}

        </div>
    )
}
