import { useState } from "react";
import Widget from "../components/Widget";
import { api } from "../services/api";
import { Spinner, Table } from "react-bootstrap";
import { Container, IconButtonContainer, TabHeader } from "./styles";
import { FiClipboard, FiEdit, FiTrash } from "react-icons/fi";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../services/react-query";
import { ToastContainer, toast } from "react-toastify";
import { useCallback } from "react";

import { ProductInformationModal } from "../components/ProductInformationModal";
import { ProductModal } from "../components/ProductModal";

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  priceFormatted: string;
};

function formatToCurrency(number: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}

type openProductModal = {
  open: boolean;
  productId: number | undefined;
};

const MainPage = () => {
  /**
   * TODO: criar um crud para buscar, listar, enviar e atualizar produtos da https://fakestoreapi.com/
   **/
  const [productToSee, setProductToSee] = useState<Product>();
  const [openProductInformationModal, setOpenProductInformationModal] =
    useState(false);
  const [openProductModal, setOpenProductModal] = useState<openProductModal>({
    open: false,
    productId: undefined,
  });

  const handleOpenProductInformationModal = useCallback((product: Product) => {
    setProductToSee(product);
    setOpenProductInformationModal(true);
  }, []);
  const handleCloseProductInformationModal = useCallback(() => {
    setProductToSee(undefined);
    setOpenProductInformationModal(false);
  }, []);

  const handleOpenProductModal = useCallback((productId?: number) => {
    setOpenProductModal({ open: true, productId });
  }, []);
  const handleCloseProductModal = useCallback(() => {
    setOpenProductModal({ open: false, productId: undefined });
  }, []);

  const { data, isLoading } = useQuery<Product[]>("products", () =>
    api.get("products").then((response) => {
      return response.data.map((product: Product) => {
        return {
          ...product,
          priceFormatted: formatToCurrency(product.price),
        };
      });
    })
  );

  const deleteProductMutation = useMutation(
    (id: number) => {
      return api.delete(`products/${id}`);
    },
    {
      onSuccess: (response) => {
        toast.success(`Produto ${response.data.id} excluido com sucesso`, {
          position: toast.POSITION.TOP_CENTER,
        });
        queryClient.invalidateQueries("products");
      },
    }
  );

  function returnRows(data: Product[] = []) {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={3}>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </td>
        </tr>
      );
    }
    return data.map((product) => {
      return (
        <tr key={product.id}>
          <td style={{ textAlign: "left" }}>{product.title}</td>
          <td>{product.priceFormatted}</td>
          <td>
            <IconButtonContainer onClick={() => {}}>
              <FiEdit
                size={20}
                color="#0E7F61"
                onClick={() => handleOpenProductModal(product.id)}
              />
            </IconButtonContainer>
            <IconButtonContainer
              onClick={() => handleOpenProductInformationModal(product)}
            >
              <FiClipboard size={20} color="#0E7F61" />
            </IconButtonContainer>
            <IconButtonContainer
              onClick={() => deleteProductMutation.mutate(product.id)}
            >
              <FiTrash size={20} color="red" />
            </IconButtonContainer>
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      {openProductInformationModal && !!productToSee && (
        <ProductInformationModal
          open={openProductInformationModal}
          onClose={handleCloseProductInformationModal}
          product={productToSee}
        />
      )}
      {openProductModal.open && (
        <ProductModal
          open={openProductModal.open}
          onClose={handleCloseProductModal}
          productId={openProductModal.productId}
        />
      )}
      <Container data-testid="MainPage">
        <ToastContainer />
        <div className="App">
          <div className="promocoes">
            <Widget widget="promo" />
          </div>

          <div className="produtos">
            <TabHeader>
              <button id="novo" onClick={() => handleOpenProductModal()}>
                NOVO PRODUTO
              </button>
            </TabHeader>
            <Table striped bordered>
              <thead>
                <tr>
                  <td style={{ textAlign: "left" }}>
                    <strong>Produto</strong>
                  </td>
                  <td style={{ width: 170 }}>
                    <strong>Preço</strong>
                  </td>
                  <td style={{ width: 170 }}>
                    <strong>Ações</strong>
                  </td>
                </tr>
              </thead>
              <tbody>{returnRows(data)}</tbody>
            </Table>
          </div>

          <div className="promocoes">
            <Widget widget="card" />
            <Widget widget="info" />
          </div>
        </div>
      </Container>
    </>
  );
};

export default MainPage;
