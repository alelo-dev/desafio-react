// components
import BannerCard from "../../components/BannerCard";
import BannerInfo from "../../components/BannerInfo";
import BannerHelp from "../../components/BannerHelp";
import Products from "../../components/Products";

// .
// import styles from "./style.module.scss";

const Main: React.FC = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-3 mt-3">
            <div className="row d-flex justify-content-center">
              <div className="col-md-6 col-sm-6 col-12">
                <BannerCard />
              </div>
            </div>
          </div>

          <div className="col-12 mb-3 mt-3">
            <Products />
          </div>

          <div className="col-12 mb-3 mt-3">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-12">
                <BannerInfo />
              </div>

              <span className="d-block d-sm-none col-12 mb-3 mt-3" />

              <div className="col-md-6 col-sm-6 col-12">
                <BannerHelp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
