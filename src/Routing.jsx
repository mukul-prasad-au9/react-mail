import { BrowserRouter, Route } from "react-router-dom";
import Inbox from "./Components/Inbox";
import SideNav from "./Components/SideNav";
import Spam from "./Components/Spam";
import Email from "./Components/Email";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <div className="d-flex">
          <SideNav />
          <div className="col-12">
            <Route path="/" exact component={Inbox} />
            <Route path="/spam" component={Spam} />
            <Route path="/email/:id" component={Email} />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
};
export default Routing;
