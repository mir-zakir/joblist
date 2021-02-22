const JobBrief = (props) => {
  return (
    <div className="jobs" style={{ maxWidth: "20vw" }}>
      <div>
        <h4>{props.title}</h4>
        <h5>{props.location}</h5>
        <img src={props.image} alt={props.image} className="job-post-image"/>
        <p>{props.detail}</p>
        <div className="salary">Salary: {props.salary}</div>
        <button style={{ backgroundColor: "blue", color: "white" }}>
          Apply
        </button>
        <button style={{ backgroundColor: "red", color: "white" }}>
          Not interested
        </button>
        <hr />
      </div>
    </div>
  );
};

export default JobBrief;
