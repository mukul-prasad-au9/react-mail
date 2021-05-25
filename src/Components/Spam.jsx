import axios from "axios";
import { useEffect, useState } from "react";
import Count from "./CommonCompo/Count";
import Radio from "./CommonCompo/Radio";
import RenderMail from "./CommonCompo/RenderMail";
const Spam = () => {
  const [email, setEmail] = useState("");
  const [type, setType] = useState("all");
  useEffect(() => {
    axios.get("http://localhost:3000/email").then((res) => setEmail(res.data));
  }, []);

  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center mt-5">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <Radio type={(e) => setType(e)} />
            <div>
              <Count data={email} type="spam" />
            </div>
          </div>
          <div className="card-body">
            <ul className="list-unstyled">
              <RenderMail type="spam" data={email} flag={type} />{" "}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Spam;
