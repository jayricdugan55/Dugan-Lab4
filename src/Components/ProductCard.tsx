import './ProductCard.css'

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  image: string
}

interface Props {
  product: Product
  onAddToCart: () => void
}

function ProductCard({ product, onAddToCart }: Props) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <div className="product-info">
        <div className="rating">
          {'⭐'.repeat(product.rating)}
        </div>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-desc">{product.description}</p>
        <p className="product-price">₱{product.price.toFixed(2)}</p>
        <button className="add-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard
