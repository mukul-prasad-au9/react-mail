import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        height: "84.5%",
        width: "10%",
        backgroundColor: "lightblue",
        zIndex: 1,
      }}
    >
      <div className="d-flex  m-5">
        <ul className="list-unstyled">
          <li>
            <Link to="/">Inbox</Link>
          </li>
          <li>
            <Link to="/spam">Spam</Link>
          </li>
          <li>
            <Link to="/delete">Delete</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
