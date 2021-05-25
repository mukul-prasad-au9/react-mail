import axios from "axios";
import { withRouter } from "react-router";

const Delete = (props) => {
  const handleDelete = (e) => {
    if (e.target.value === "delete") {
      axios
        .patch(`http://localhost:3000/email/${props.Id}`, {
          type: "delete",
        })
        .then((res) => {
          alert("email deleted");
          props.history.push("/");
        });
    } else {
      axios
        .patch(`http://localhost:3000/email/${props.Id}`, {
          type: "inbox",
        })
        .then((res) => {
          alert("email deleted");
          props.history.push("/");
        });
    }
  };

  return (
    <div>
      {props.delete ? (
        <button
          value="restore"
          onClick={handleDelete}
          className="btn btn-success mr-4"
        >
          restore
        </button>
      ) : (
        <button
          value="delete"
          onClick={handleDelete}
          className="btn btn-danger mr-4"
        >
          Delete
        </button>
      )}
    </div>
  );
};
export default withRouter(Delete);
