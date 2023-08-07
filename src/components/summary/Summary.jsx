const Summary = ({ data }) => {

console.log("data en summary", data)

  const { title, resume } = data;
  // console.log("slideHome", slideHome)

  return (
    <div className="summary">
      {title && (
        <div className="summary__col">
          <h2>{title}</h2>
        </div>
      )}

      <div className="summary__col">
        {resume ? <p>{resume}</p> : <p>{data}</p>}
      </div>
    </div>
  );
};

export default Summary;
