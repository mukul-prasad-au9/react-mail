import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center mt-5">
        <ul>
          <li>
            <Link to="/">Inbox</Link>
          </li>
          <li>
            <Link to="/spam">Spam</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default SideNav;
