import { Image } from "../../components";

const Slider = ({ data, slideHome }) => {
  const { title, background } = data;
  console.log("slideHome", slideHome)

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