import logo from "../assets/logo.jpeg";
import styles from "./Navbar.module.css"
import cart from "../assets/cart.png"
import {useNavigate} from 'react-router-dom'

const Navbar = () =>{
    const navigate = useNavigate();
function goToLogin(){
navigate("/Login");

}

    return (
      <div className={styles.Navbar}>
        <header className="p-3 ">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <img className={styles.logo}src={logo} alt="" />
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="#" className="nav-link px-2 text-secondary">Home</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Features</a></li>
          <li><a href="#" className="nav-link px-2 text-white">Pricing</a></li>
         
          <li><a href="#" className="nav-link px-2 text-white">About</a></li>
        </ul>

        

        <div className="text-end">
          <button type="button" className="btn btn-outline-light me-2" onClick={goToLogin}>Login</button>
          <button type="button" className="btn btn-warning">Sign-up</button>
          <img className={styles.cart}src={cart} alt="" />
        </div>
      </div>
    </div>
  </header>
      </div>
    );
}

export default Navbar;