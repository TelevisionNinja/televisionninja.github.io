import './index.scss';

export default function ProjectCard({ title, description, imgUrl, link }) {
  return (
    <a
      href={link}
      rel="noreferrer"
      target="_blank"
    >
      <div className="proj-imgbx">
        <img src={imgUrl} alt={description}/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </a>
  );
}
