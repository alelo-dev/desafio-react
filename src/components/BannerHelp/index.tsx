import styles from "./style.module.scss";

const Index: React.FC = () => {
  return (
    <div className={`${styles.banner} ${styles.right} p-3 h-100 rounded-3`}>
      <div className="d-flex flex-column align-items-center">
        <h2 className="fs-4">Precisando de ajdua?</h2>
        <h3 className="fs-5">Fale com nosso time de atendimento!</h3>

        <a href="/#" className={`${styles.help} btn text-uppercase fw-bold`}>
          Me ajuda!
        </a>
      </div>
    </div>
  );
};

export default Index;
