import { TProduct, TProductList } from "./models";

function ShopItem({img, name, color, price}: TProduct) {
  return (
    <div className="line">
      <img className="line-img"
        src={img}
        alt={name}
      />
      <p className="card-title">{name}</p>
      <p>{color}</p>
      <p className='price'>${price}</p>
      <button className="card-button">add to cart</button>
    </div>)
}

export default function ListView({products}: TProductList) {
  return (
    <div className='list-view'>
      {products.map((prod: TProduct, i: number) =>
        <ShopItem key={prod.name+i} {...prod} />
      )}
    </div>
  )
}