import { BrowserRouter, Route } from "react-router-dom";
import Inbox from "./Components/Inbox";
import SideNav from "./Components/SideNav";
import Spam from "./Components/Spam";
import Email from "./Components/Email";
import Delete from "./Components/Delete";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Routing = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <div className="d-flex">
          <SideNav />
          <div className="col-12">
            <Route path="/" exact component={Inbox} />
            <Route path="/spam" component={Spam} />
            <Route path="/email/:id" component={Email} />
            <Route path="/delete" component={Delete} />
          </div>
        </div>
      </BrowserRouter>
      <Footer />
    </>
  );
};
export default Routing;
