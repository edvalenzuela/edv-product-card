import { ProductCardProps } from "../components/ProductCard"
import { ProductTitleProps } from "../components/ProductTitle"
import { ProductImageProps } from "../components/ProductImage"
import { ProductButtonsProps } from "../components/ProductButtons"

export interface Product {
  id:    string
  title: string
  img?:  string
}

export interface ProductContextProps {
  counter:    number;
  maxCount?:  number;
  product:    Product;
  increaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element
  Buttons: (Props: ProductButtonsProps) => JSX.Element
  Image:   (Props: ProductImageProps) => JSX.Element
  Title:   (Props: ProductTitleProps) => JSX.Element
}

export interface onChangeArgs{
  count: number
  product: Product
}

export interface InitialValues {
  count?:   number;
  maxCount?:number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) =>  void;
  reset: () => void;
}