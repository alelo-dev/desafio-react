import * as React from "react";
import * as Styled from "./styled";
import * as Mui from "@mui/material";
import * as I from "../../interfaces/interfaces";
import axios from "axios";
import { ReactComponent as PencilIcon } from "../../assets/pencil.svg";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";
import { ReactComponent as CartIcon } from "../../assets/cart.svg";
import Widget from "../../components/Widget/widget";
import { toastfySuccess, toastfyError } from "../../components/Toast";
import Modal from "../../components/Modal/modal";

const columns: I.Select[] = [
  { value: 1, label: "PRODUTO" },
  { value: 2, label: "PREÇO" },
  { value: 3, label: "CATEGORIA" },
  { value: 4, label: "DESCRIÇÃO" },
  { value: 5, label: "AÇÃO" },
];

const MainPage = () => {
  /**
   * TODO: criar um crud para buscar, listar, enviar e atualizar produtos da https://fakestoreapi.com/
   *  */
  const [product, setProduct] = React.useState<I.Product[]>([]);
  const [id, setId] = React.useState(0);
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [category, setCategory] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [modalType, setModalType] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);
  const [dialogDelete, setDialogDelete] = React.useState(false);

  const listProducts = () => {
    axios
      .get(`https://fakestoreapi.com/products?limit=5`)
      .then(({ data }) => {
        setIsLoading(false);
        setProduct(data);
      })
      .catch((error) => {
        toastfyError("Erro ao listar Produtos.");
        console.error("There was an error!", error);
      });
  };
  const registerProducts = (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    const data = {
      title,
      price,
      description,
      category,
    };
    axios
      .post("https://fakestoreapi.com/products?", data)
      .then(() => {
        toastfySuccess("Produto cadastrado com sucesso!");
        setIsLoading(false);
        setOpenModal(false);
      })
      .catch((error: any) => {
        toastfyError("Erro ao cadastrar produto");
        console.error("There was an error!", error);
        setIsLoading(false);
      });
  };
  const updateProducts = (event: React.FormEvent) => {
    debugger;
    event.preventDefault();
    setIsLoading(true);
    const data = {
      title: title,
      price: price,
      description: description,
      category: category,
    };
    fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    })
      .then(() => {
        toastfySuccess("Produto editado com sucesso!");
        setIsLoading(false);
        handleCloseModal();
        setOpenModal(false);
        listProducts();
      })
      .catch((error: any) => {
        toastfyError("Erro ao editar Produto.");
        console.error("There was an error!", error);
        setIsLoading(false);
      });
  };
  const onDelete = (id: number) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then(() => {
        listProducts();
        handleCloseDialog();
        toastfySuccess("Produto excluído com sucesso!");
      })
      .catch((error) => {
        toastfyError("Erro ao excluir Produto.");
        console.error("There was an error!", error);
      });
  };
  function openModalToRegister() {
    setOpenModal(true);
    setModalType("create");
    setTitle("data.title");
    setPrice(0);
    setTitle("");
    setDescription("");
  }
  function openModalAndSelectProductToUpdate(id: number) {
    setOpenModal(true);
    setModalType("update");
    axios.get(`https://fakestoreapi.com/products/${id}`).then(({ data }) => {
      setId(data.id);
      setTitle(data.title);
      setPrice(data.price);
      setTitle(data.category);
      setDescription(data.description);
    });
  }

  const openDialogDelete = (id: number) => {
    setDialogDelete(true);
    setId(id);
  };

  function handleCloseModal() {
    return setOpenModal(false);
  }

  const handleCloseDialog = () => setDialogDelete(false);

  React.useEffect(() => {
    listProducts();
  }, []);

  return (
    <Styled.Main>
      <Styled.Container className="App">
        <Widget type="type1" />
        <div className="add-products">
          <h4>Conheça nossos produtos!</h4>
          <Mui.Tooltip title="Cadastrar Produto">
            <Mui.Button
              variant="outlined"
              onClick={() => openModalToRegister()}
              startIcon={<CartIcon />}
            >
              PRODUTO
            </Mui.Button>
          </Mui.Tooltip>
        </div>
        <Mui.TableContainer>
          <Mui.Table>
            <Mui.TableHead>
              <Mui.TableRow>
                {columns.map((column) => (
                  <Mui.TableCell key={column.value} align={"left"}>
                    {column.label}
                  </Mui.TableCell>
                ))}
              </Mui.TableRow>
            </Mui.TableHead>
            <Mui.TableBody>
              {product.length < 1 ? (
                <>
                  {columns.map((column) => (
                    <Mui.TableRow key={column.value}>
                      <Mui.TableCell align={"left"}>
                        <Mui.Skeleton />
                      </Mui.TableCell>
                      <Mui.TableCell align={"left"}>
                        <Mui.Skeleton />
                      </Mui.TableCell>
                      <Mui.TableCell align={"left"}>
                        <Mui.Skeleton />
                      </Mui.TableCell>
                      <Mui.TableCell align={"left"}>
                        <Mui.Skeleton />
                      </Mui.TableCell>
                      <Mui.TableCell align={"left"}>
                        <Mui.Skeleton />
                      </Mui.TableCell>
                    </Mui.TableRow>
                  ))}
                </>
              ) : (
                product.map((data) => {
                  return (
                    <Mui.TableRow
                      hover
                      role="checkbox"
                      key={data.id}
                      tabIndex={-1}
                    >
                      <Mui.TableCell align="left">
                        {data.title.substring(0, 30)}...
                      </Mui.TableCell>
                      <Mui.TableCell align="left">
                        R$ {data.price}
                      </Mui.TableCell>
                      <Mui.TableCell align="left">
                        {data.category}
                      </Mui.TableCell>
                      <Mui.TableCell align="left">
                        {data.description.substring(0, 50)}...
                      </Mui.TableCell>
                      <Mui.TableCell align="left">
                        <Mui.ButtonGroup
                          variant="text"
                          aria-label="text button group"
                        >
                          <Mui.Tooltip title="Editar Produto">
                            <Mui.IconButton
                              className="edit"
                              onClick={() =>
                                openModalAndSelectProductToUpdate(data.id)
                              }
                            >
                              <PencilIcon />
                            </Mui.IconButton>
                          </Mui.Tooltip>
                          <Mui.Tooltip title="Deletar Produto">
                            <Mui.IconButton
                              className="delete"
                              onClick={() => openDialogDelete(data.id)}
                            >
                              <TrashIcon />
                            </Mui.IconButton>
                          </Mui.Tooltip>
                        </Mui.ButtonGroup>
                      </Mui.TableCell>
                    </Mui.TableRow>
                  );
                })
              )}
            </Mui.TableBody>
          </Mui.Table>
        </Mui.TableContainer>
        <Modal
          openModal={openModal}
          onClose={handleCloseModal}
          onSubmit={modalType === "create" ? registerProducts : updateProducts}
          titleModal={
            modalType === "create"
              ? "Cadastro de Produtos"
              : "Edição de Produto"
          }
          onChangeTitle={(e) => setTitle(e.target.value)}
          valueTitle={title}
          onChangePrice={(e) => setPrice(Number(e.target.value))}
          valuePrice={price}
          onChangeCategory={(e) => setCategory(e.target.value)}
          valueCategory={category}
          onChangeDescription={(e) => setDescription(e.target.value)}
          valueDescription={description}
          isLoading={isLoading}
          onClickClose={handleCloseModal}
          titleButton={modalType === "create" ? "Cadastrar" : "Editar"}
        />

        <Mui.Dialog open={dialogDelete} onClose={handleCloseDialog}>
          <Mui.DialogContent style={{ display: "flex", alignItems: "center" }}>
            <Mui.DialogContentText align="center">
              Deseja realmente excluir este Produto?
            </Mui.DialogContentText>
          </Mui.DialogContent>
          <Mui.DialogActions
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Mui.Button
              variant="outlined"
              color="success"
              onClick={handleCloseDialog}
            >
              Não
            </Mui.Button>
            <Mui.Button
              variant="contained"
              color="success"
              onClick={() => onDelete(id)}
            >
              Sim
            </Mui.Button>
          </Mui.DialogActions>
        </Mui.Dialog>
        <Widget type="type2" />
        <Widget type="type3" />
      </Styled.Container>
    </Styled.Main>
  );
};

export default MainPage;
