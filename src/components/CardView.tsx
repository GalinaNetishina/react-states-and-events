import { TProduct, TProductList } from "./models";

function ShopCard({card}: TProduct){
  return (
    <div className="card-table">
      <h1 className="card-title">{card.name}</h1>
      <p className="color">{card.color}</p>
      <img className="card-img"
        src={card.img}
        alt={card.name}
      />
      <div className='card-footer'>
        <span className='price'>${card.price}</span>
        <button className="card-button">add to cart</button>
        </div>
    </div>)
}

export default function CardView({products}: TProductList) {
  return (
    <div className='card-view'>
    {products.map((prod: TProduct, i: number)=>
      <ShopCard key={prod.name+i} card={prod}/>
      )}
    </div>
  )
}
