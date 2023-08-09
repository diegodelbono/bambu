import { Image } from "../../components";

const About = ({ data }) => {
  const { resume, photo } = data;

  return (
    <div className="grid">
      <div className="grid__col">
        <div className="p-medium" dangerouslySetInnerHTML={{ __html: resume }} />
      </div>
      <div className="grid__col">
        <Image id={photo.url} />
      </div>
    </div>
  );
};

export default About;
