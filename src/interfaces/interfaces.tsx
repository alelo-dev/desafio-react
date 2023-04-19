export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface Select {
  value: number;
  label: string;
}

export interface Header {
  toggleTheme(): void;
}
export interface Modal {
  openModal: boolean;
  onClose(): void;
  onSubmit: (event: React.FormEvent) => void;
  onClickClose(): void;
  titleModal: string;
  onChangeTitle: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePrice: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeCategory: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeDescription: (event: React.ChangeEvent<HTMLInputElement>) => void;
  valueTitle: string;
  valuePrice: number;
  valueCategory: string;
  valueDescription: string;
  titleButton: string;
  isLoading: boolean;
}
