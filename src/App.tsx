import { useState } from 'react'
import Navbar from './Components/Navbar'
import ProductCard from './Components/ProductCard'
import './App.css'

interface Product {
  id: number
  name: string
  description: string
  price: number
  rating: number
  image: string
}

function App() {
  const [cartCount, setCartCount] = useState(0)

  const products: Product[] = [
    {
      id: 1,
      name: 'Crispy Chicken',
      description: 'Chicken breast, chilli sauce, tomatoes, pickles, coleslaw',
      price: 99.15,
      rating: 5,
      image: '/images/crispy.PNG'
    },
    {
      id: 2,
      name: 'Ultimate Bacon',
      description: 'House patty, cheddar cheese, bacon, onion, mustard',
      price: 99.32,
      rating: 5,
      image: '/images/bacon.PNG'
    },
    {
      id: 3,
      name: 'Black Sheep',
      description: 'American cheese, tomato relish, avocado, lettuce, red onion',
      price: 69.15,
      rating: 4,
      image: '/images/blacksheep.PNG'
    },
    {
      id: 4,
      name: 'Vegan Burger',
      description: 'Plant-based patty, avocado, tomato, lettuce, cucumber, red onion',
      price: 99.25,
      rating: 4,
      image: '/images/vegan.PNG'
    }
  ]

  const handleAddToCart = () => setCartCount(prev => prev + 1)

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <section className="burgers-section">
        <h2>OUR CRAZY BURGERS</h2>
        <p>Get ready for a wild ride of flavors! Our crazy patties, bold toppings, and irresistible sauce on a perfectly toasted bun.</p>
      </section>
      <section className="products-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </section>
    </div>
  )
}

export default App