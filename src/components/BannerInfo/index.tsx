import styles from "./style.module.scss";

const Index: React.FC = () => {
  return (
    <div
      className={`${styles.banner} ${styles.left} p-3 h-100 rounded-3 d-flex align-items-center justify-content-center`}
    >
      <p className="text-center m-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste autem
        voluptas molestias vero deleniti commodi cum voluptatem eligendi velit
        eaque tenetur, mollitia, voluptatibus inventore rem? Amet ex vero eius
        molestiae.
      </p>
    </div>
  );
};

export default Index;
