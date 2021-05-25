import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Spam = () => {
  const [email, setEmail] = useState("");
  useEffect(() => {
    axios.get("http://localhost:3000/spam").then((res) => setEmail(res.data));
  }, []);
  const renderSpam = (data) => {
    if (data) {
      return data.map((val, idx) => {
        return (
          <li key={idx}>
            <Link to={`email/${val.id}`}>
              <h1>{val.subject}</h1>
            </Link>
          </li>
        );
      });
    }
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <ul>{renderSpam(email)}</ul>
      </div>
    </div>
  );
};
export default Spam;
