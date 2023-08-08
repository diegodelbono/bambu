const Slider = ({ data }) => {
  const { title, background } = data;
  return (
    <div className="slider" style={{ background: `url(${background})` }}>
      <div className="slider__content">
        <h1 className="text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Slider;
