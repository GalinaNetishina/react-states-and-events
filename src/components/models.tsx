export type TProduct = {
    key:string
    name: string,
    price: number;
    img: string,
    color: string      
  }

export type TProductList = TProduct[]
  

export type TIconSwitch = {
    icon: string,
    onSwitch: () => void
}