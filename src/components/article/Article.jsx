import React from "react";
import { Button, Image } from "../../components";
import { arrayOf, shape } from "prop-types";
import { converFormatText } from "../../utils/format"

const Article = ({ data }) => {
  const { button, description, img, img_secondary, video, title } = data;
  const articleId = converFormatText(title);

  return (
    <article id={articleId} className="article">
      <div className="article__col">
        <h3 className="h-small">{title}</h3>
      </div>
      <div className="article__col">
        <div className="article__figure">
          <div className="article__figure--hover">
            {img_secondary && <Image id={img_secondary.url} />}
            {video && (
              <video className="article__video" autoPlay loop muted playsInline>
                <source src={video.url} type="video/mp4" />
              </video>
            )}
          </div>
          <Image id={img.url} />
        </div>
        <div className="article__summary">
          <p className="p-small">{description}</p>
        </div>
        <div className="article__button">
          <Button data={button} />
        </div>
      </div>
    </article>
  );
};

Article.propTypes = {
  data: arrayOf(shape({})),
};

Article.defaultProps = {
  data: [],
};

export default Article;
