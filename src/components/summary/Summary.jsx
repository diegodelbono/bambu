const Summary = ({ data }) => {
    const { title, resume } = data;

    return (
        <div className="summary">
            {title && (
                <div className="summary__col">
                    <h2>{title}</h2>
                </div>
            )}
            <div className="summary__col">
                {resume ? <p dangerouslySetInnerHTML={{ __html: resume }} /> : <p className="font-size-md" dangerouslySetInnerHTML={{ __html: data }} />}
            </div>
        </div>
    );
};

export default Summary;
