const Radio = (props) => {
  return (
    <div className="d-flex">
      <div className="form-check">
        <input
          onClick={(e) => props.type(e.target.value)}
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios1"
          value="all"
          checked
        />
        <label className="form-check-label" for="exampleRadios1">
          All
        </label>
      </div>
      <div className="form-check">
        <input
          onClick={(e) => props.type(e.target.value)}
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          id="exampleRadios2"
          value="flagged"
        />
        <label className="form-check-label" for="exampleRadios2">
          Flagged
        </label>
      </div>
    </div>
  );
};
export default Radio;
