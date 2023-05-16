import { Link } from "react-router-dom";
import banner from "../../assets/404-banner.png";
import "../../styles/pages/notFound.scss";

const NotFound = () => {
  return (
    <div id="notFound">
      <img src={banner} alt="Página não encontrada" className="image"></img>
      <h3>Poxa, não encontramos essa página =( </h3>

      <Link to={"/"}>Voltar à página inicial</Link>
    </div>
  );
};

export default NotFound;
