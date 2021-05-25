import axios from "axios";
import { useEffect, useState } from "react";
import Delete from "../EmailComp/Delete";
import Flag from "../EmailComp/Flag";

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
            <div className="card-footer d-flex">
              {email.type === "delete" ? (
                <Delete Id={props.match.params.id} delete={true} />
              ) : (
                <Delete Id={props.match.params.id} delete={false} />
              )}
              {email.flagged ? (
                <Flag Id={props.match.params.id} flag={true} />
              ) : (
                <Flag Id={props.match.params.id} flag={false} />
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
