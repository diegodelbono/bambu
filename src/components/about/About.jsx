import { Button, Image } from "../../components";

const About = ({ data }) => {

  console.log("data en summary", data)

  const { resume, photo } = data;
  // console.log("slideHome", slideHome)

  return (
    <div className="grid">
      <div className="grid__col">
        <div dangerouslySetInnerHTML={{ __html: resume }} />
      </div>
      <div className="grid__col">
        <Image id={photo} />
      </div>
    </div>
  );
};

export default About;
