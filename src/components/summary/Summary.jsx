import { arrayOf, shape } from "prop-types";

const Summary = ({ data }) => {
  const { title, resume } = data;

  return (
    <div className="summary">
      {title && (
        <div className="summary__col">
          <h2 className="h-medium">{title}</h2>
        </div>
      )}
      <div className="summary__col">
        {resume ? (
          <div className="p-small" dangerouslySetInnerHTML={{ __html: resume }} />
        ) : (
          <div className="h-small" dangerouslySetInnerHTML={{ __html: data }} />
        )}
      </div>
    </div>
  );
};

export default Summary;
