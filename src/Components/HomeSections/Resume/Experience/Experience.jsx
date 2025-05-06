import './Experience.scss';

export default function Experience({ title, date, type, descriptions, link }) {
    return (
        <div className='Experience'>
            <h2 className='h5'>{title}</h2>
            <p>{date}</p>
            <span>{type}</span>
            <ul>
                {descriptions?.map((desc, index) => <li key={index}>{desc}</li>)}
            </ul>
            <p>Project Url : <a href={link} style={{ color: "blue", textDecoration: "none", fontWeight: "bold" }}>Project Url</a></p>

        </div>
    )
}
