interface ProjectFrameProps {
    image: string;
    link: string;
    title: string;
    description: string;
}

export default function ProjectFrame (props: ProjectFrameProps) {
    const { image, link, title, description } = props;

    return <a href={link} target="blank">
    <div className="frame" id={link} style={{'backgroundImage': `url(${image})`}}>
      <div className="inner p-3 p-lg-5">
        <h3>{title}</h3>
        <hr />
        <p>
          {description}
        </p>
      </div>
    </div>
  </a>
}