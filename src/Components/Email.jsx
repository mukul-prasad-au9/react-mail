import axios from "axios";
import { useEffect, useState } from "react";

const Email = (props) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/email/${props.match.params.id}`)
      .then((res) => {
        axios
          .patch(`http://localhost:3000/email/${props.match.params.id}`, {
            unread: false,
          })
          .then((res) => {
            console.log(res);
          });
        setEmail(res.data);
      });
  }, []);
  const handleDelete = (e) => {
    if (e.target.value === "delete") {
      axios
        .patch(`http://localhost:3000/email/${props.match.params.id}`, {
          type: "delete",
        })
        .then((res) => {
          alert("email deleted");
          props.history.push("/");
        });
    } else {
      axios
        .patch(`http://localhost:3000/email/${props.match.params.id}`, {
          type: "inbox",
        })
        .then((res) => {
          alert("email deleted");
          props.history.push("/");
        });
    }
  };
  const handleFlag = (e) => {
    if (e.target.value === "flagged") {
      axios
        .patch(`http://localhost:3000/email/${props.match.params.id}`, {
          flagged: false,
        })
        .then((res) => {
          alert("email Unflagged");
          props.history.push("/");
        });
    } else {
      axios
        .patch(`http://localhost:3000/email/${props.match.params.id}`, {
          flagged: true,
        })
        .then((res) => {
          alert("email flagged");
          props.history.push("/");
        });
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        {email ? (
          <div className="card">
            <div className="card-header">
              <h4>{email.subject}</h4>
            </div>
            <div className="card-body">
              <p>{email.content}</p>
            </div>
            <div className="card-footer">
              {email.type === "delete" ? (
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
              {email.flagged ? (
                <button
                  value="flagged"
                  onClick={handleFlag}
                  className="btn btn-info "
                >
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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Email;
