import axios from "axios";
import { withRouter } from "react-router";

const Flag = (props) => {
  const handleFlag = (e) => {
    if (e.target.value === "flagged") {
      axios
        .patch(`http://localhost:3000/email/${props.Id}`, {
          flagged: false,
        })
        .then((res) => {
          alert("email Unflagged");
          props.history.push("/");
        });
    } else {
      axios
        .patch(`http://localhost:3000/email/${props.Id}`, {
          flagged: true,
        })
        .then((res) => {
          alert("email flagged");
          props.history.push("/");
        });
    }
  };
  return (
    <div>
      {props.flag ? (
        <button value="flagged" onClick={handleFlag} className="btn btn-info ">
          UnFlag
        </button>
      ) : (
        <button
          value="unflagged"
          onClick={handleFlag}
          className="btn btn-info "
        >
          Flag
        </button>
      )}
    </div>
  );
};
export default withRouter(Flag);
