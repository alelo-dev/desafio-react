import { Modal, Form } from "react-bootstrap";
import { ModalTitle, Button, Input, TextArea, SpanError } from "./styles";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useMutation } from "react-query";

import { toast } from "react-toastify";
import { BlockUi } from "../BlockUi/styles";

interface ProductModalProps {
  productId?: number;
  open: boolean;
  onClose(): void;
}
type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  priceFormatted: string;
};

const shema = yup.object().shape({
  title: yup.string().required("Title is required"),
  category: yup.string().required("Category is required"),
  price: yup
    .string()
    .required("Price is required")
    .test("isNumeric", "Price need to be a number", (value) => {
      return !!Number(value);
    }),
  image: yup.string().required("Image is required"),
  description: yup.string().required("Description is required"),
});

export function ProductModal({ open, onClose, productId }: ProductModalProps) {
  const title = productId ? "Alterar Produto" : "Cadastrar Produto";
  const confirmButtonTitle = productId ? "Alterar" : "Cadastrar";
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(shema),
  });

  const postMutate = useMutation(
    (product: Product) => {
      return api.post("products", product);
    },
    {
      onSuccess: (data) => {
        toast.success(`Product ${data.data.id} has been created with success`);
        onClose();
      },
    }
  );
  const putMudate = useMutation(
    (product: Product) => {
      return api.put(`products/${productId}`, product);
    },
    {
      onSuccess: (data) => {
        toast.success(`Product ${data.data.id} has been altered with success`);
        onClose();
      },
    }
  );

  const onSubmit = handleSubmit((data: Product) => {
    if (productId) {
      return putMudate.mutate(data);
    }
    return postMutate.mutate(data);
  });

  useEffect(() => {
    if (productId) {
      api.get(`products/${productId}`).then((response) => {
        console.log(response.data);
        setValue("title", response.data.title);
        setValue("category", response.data.category);
        setValue("price", response.data.price);
        setValue("image", response.data.image);
        setValue("description", response.data.description);
      });
    }
  }, [productId, setValue]);

  return (
    <Modal show={open} onHide={onClose}>
      {(postMutate.isLoading || putMudate.isLoading) && <BlockUi />}
      <Form onSubmit={onSubmit}>
        <Modal.Header>
          <ModalTitle>{title}</ModalTitle>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Input className="form-control" {...register("title")} />
            {errors.title && <SpanError>{errors.title.message}</SpanError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Input className="form-control" {...register("category")} />
            {errors.category && (
              <SpanError>{errors.category.message}</SpanError>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Input className="form-control" {...register("price")} />
            {errors.price && <SpanError>{errors.price.message}</SpanError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Image URL</Form.Label>
            <Input className="form-control" {...register("image")} />
            {errors.image && <SpanError>{errors.image.message}</SpanError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <TextArea
              className="form-control"
              rows={3}
              {...register("description")}
            />
            {errors.description && (
              <SpanError>{errors.description.message}</SpanError>
            )}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit">{confirmButtonTitle}</Button>
          <Button onClick={onClose}>Cancelar</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
