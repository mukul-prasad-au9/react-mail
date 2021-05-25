import { Link } from "react-router-dom";

const RenderMail = (props) => {
  if (props.data) {
    if (props.flag === "flagged") {
      return props.data.map((val, idx) => {
        if (val.flagged === true) {
          if (val.type === props.type) {
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
      return props.data.map((val, idx) => {
        if (val.type === props.type) {
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
  } else {
    return <h4>Loading</h4>;
  }
};
export default RenderMail;
