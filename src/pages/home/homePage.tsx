import Widget from "../../components/widget/Widget";
import Table from "../../components/table/Table";

import "../../styles/pages/homePage.scss";

const HomePage = () => {
  return (
    <div id="main" data-testid="HomePage">
      <div className="row-widget">
        <Widget widget="special-offer" />
      </div>

      <section className="products">
        <h5>Conheça nossos produtos!</h5>
        <Table />
      </section>

      <div className="row-widgets">
        <Widget widget="card" />
        <Widget widget="info" />
      </div>
    </div>
  );
};

export default HomePage;
