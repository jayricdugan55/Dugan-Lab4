import './Navbar.css'

interface Props {
  cartCount: number
}

function Navbar({ cartCount }: Props) {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <span className="logo">🍔 TASTY BURGER</span>
      </div>
      <div className="nav-right">
        <a href="#">ABOUT</a>
        <a href="#">OUR MENU</a>
        <a href="#">SHOP</a>
        <a href="#">CONTACT</a>
        <span className="cart-icon">🛒 {cartCount} items</span>
      </div>
    </nav>
  )
}

export default Navbar
