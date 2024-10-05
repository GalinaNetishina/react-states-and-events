import { TProduct, TProductList } from "./models";

function ShopCard({img, name, color, price}: TProduct){
  return (
    <div className="card-table">
      <h1 className="card-title">{name}</h1>
      <p className="color">{color}</p>
      <img className="card-img"
        src={img}
        alt={name}
      />
      <div className='card-footer'>
        <span className='price'>${price}</span>
        <button className="card-button">add to cart</button>
        </div>
    </div>)
}

export default function CardView({products}: TProductList) {
  return (
    <div className='card-view'>
    {products.map((prod: TProduct, i: number)=>
      <ShopCard key={prod.name+i} {...prod}/>
      )}
    </div>
  )
}
