export type TProduct = {
    name: string,
    price: number;
    img: string,
    color: string      
  }

export type TProductList = {
  products: TProduct[]
}
  

export type TIconSwitch = {
    icon: string,
    onSwitch: () => void
}