import image from "../../assets/images/cartoes.png";
import styles from "./style.module.scss";

const Index: React.FC = () => {
  return (
    <div
      className={`${styles.banner} d-flex flex-column flex-sm-row flex-md-row justify-content-between align-items-center rounded-3 p-3`}
    >
      <h2 className="fs-4">Peça já o seu cartão Alelo!</h2>
      <img
        alt="Peça já o seu cartão Alelo!"
        src={image}
        className="d-block w-25"
      />
    </div>
  );
};

export default Index;
