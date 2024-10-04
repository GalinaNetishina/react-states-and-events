import { TProduct, TProductList } from "./models";

function ShopItem({card}: TProduct) {
  return (
    <div className="line">
      <img className="line-img"
        src={card.img}
        alt={card.name}
      />
      <p className="card-title">{card.name}</p>
      <p>{card.color}</p>
      <p className='price'>${card.price}</p>
      <button className="card-button">add to cart</button>
    </div>)
}

export default function ListView({products}: TProductList) {
  return (
    <div className='list-view'>
      {products.map((prod: TProduct, i: number) =>
        <ShopItem key={prod.name+i} card={prod} />
      )}
    </div>
  )
}