import { Image, Modal } from "react-bootstrap";
import {
  ModalTitle,
  ProductTitle,
  ProductDetails,
  ProductDescription,
  CloseButton,
} from "./styles";
type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  priceFormatted: string;
};
interface ProductInformationModalProps {
  open: boolean;
  onClose(): void;
  product: Product;
}

export function ProductInformationModal({
  open,
  onClose,
  product,
}: ProductInformationModalProps) {
  console.log({ product });
  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header>
        <ModalTitle>Informaçoes do Produto</ModalTitle>
      </Modal.Header>
      <Modal.Body>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductDetails>
          <Image
            id="productImage"
            src={product.image}
            alt="product image"
            width={150}
          />
          <div id="dataContainer">
            <p>
              Códigos: <span>{product.id}</span>
            </p>
            <p>
              Preço: <span>{product.priceFormatted}</span>
            </p>
            <p>
              Categoria: <span>{product.category}</span>
            </p>
          </div>
        </ProductDetails>
        <ProductDescription>
          <p id="description">{product.description}</p>
        </ProductDescription>
      </Modal.Body>
      <Modal.Footer>
        <CloseButton className="btn" onClick={onClose}>
          FECHAR
        </CloseButton>
      </Modal.Footer>
    </Modal>
  );
}
