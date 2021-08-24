import Feedu from "../../components/UserFeed/Feedu";
import Navbar from "../../components/Navbar/Navbar";
import Userinfos from "../../components/Userinfos/Userinfos";
import "./UserPage.scss";

const UserPage = () => {
  return (
    <div className="UserPage">
      <Navbar />
      <div className="container">
        <Userinfos />
        <Feedu />
      </div>
    </div>
  );
};

export default UserPage;
