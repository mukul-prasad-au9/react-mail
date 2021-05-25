import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Delete = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("all");
  useEffect(() => {
    axios.get("http://localhost:3000/email").then((res) => setEmail(res.data));
  }, []);
  const count = (data) => {
    var c = 0;
    if (data) {
      data.map((val, idx) => {
        if (val.type === "delete") {
          if (val.unread) {
            c++;
          }
        }
      });
      return (
        <p>
          <span className="text-danger">Unread:</span>
          {c}
        </p>
      );
    }
  };
  const renderdelete = (data) => {
    if (data) {
      if (type === "flagged") {
        return data.map((val, idx) => {
          if (val.flagged === true) {
            if (val.type === "delete") {
              return (
                <div>
                  <li key={idx}>
                    <Link to={`email/${val.id}`}>
                      <h1>{val.subject}</h1>
                    </Link>
                  </li>
                  <hr />
                </div>
              );
            }
          }
        });
      } else {
        return data.map((val, idx) => {
          if (val.type === "delete") {
            return (
              <div>
                <li key={idx}>
                  <Link to={`email/${val.id}`}>
                    <h1>{val.subject}</h1>
                  </Link>
                </li>
                <hr />
              </div>
            );
          }
        });
      }
    }
  };
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <div className="d-flex">
              <div className="form-check">
                <input
                  onClick={(e) => setType(e.target.value)}
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
                  onClick={(e) => setType(e.target.value)}
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
            <div>{count(email)}</div>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">{renderdelete(email)}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Delete;
