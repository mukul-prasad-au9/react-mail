import axios from "axios";
import { useEffect, useState } from "react";

const Email = (props) => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios
      .get(`http://localhost:3000/email/${props.match.params.id}`)
      .then((res) => setEmail(res.data));
  }, []);

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
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default Email;
