import React from "react";
import { Image } from "../../components";

const About = ({ data }) => {
  const { resume, photo } = data;
  return (
    <div>
      <div className="about">
        <div className="about__col">
          <div className="p-medium" dangerouslySetInnerHTML={{ __html: resume }} />
        </div>
        <div className="about__col">
          <Image id={photo.url} />
        </div>
      </div>
    </div>
  );
};

export default About;
