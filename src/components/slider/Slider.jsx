import { Image } from "../../components";

const Slider = ({ data }) => {
  const { title, background } = data;

  return (
    <div className="slider">
      <div className="slider__content">
        <h1 className="text-white">{title}</h1>
      </div>
      <div className="slider__image">
        <Image id={background} />
      </div>
    </div>
  );
};

export default Slider;
