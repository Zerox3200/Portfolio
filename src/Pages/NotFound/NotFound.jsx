import './NotFound.scss';
import NotFoundPhoto from './../../Images/NotFound.jpg'
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className='NotFound'>
            <div className="NotFoundGuied">
                <h1>SomeThing's went wrong here!!</h1>
                <span>I can't reach the page  you are looking for  Go back to home please</span>
                <Link to='' className='btn btn-dark'>Home</Link>
            </div>
            <img src={NotFoundPhoto} alt="" srcSet="" />
        </div>
    )
}
