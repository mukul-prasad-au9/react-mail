import { BrowserRouter, Route } from "react-router-dom";
import Inbox from "./Components/Pages/Inbox";
import SideNav from "./Components/Basic/SideNav";
import Spam from "./Components/Pages/Spam";
import Email from "./Components/Pages/Email";
import Delete from "./Components/Pages/Delete";
import Navbar from "./Components/Basic/Navbar";
import Footer from "./Components/Basic/Footer";

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
