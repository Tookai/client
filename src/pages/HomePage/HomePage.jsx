import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Leftbar from "../../components/Leftbar/Leftbar.jsx";
import Feed from "../../components/Feed/Feed.jsx";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Navbar />
      <div className="flex">
{/*         <div className="left">
          <Leftbar />
        </div> */}
        <div className="right">
          <Feed />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
