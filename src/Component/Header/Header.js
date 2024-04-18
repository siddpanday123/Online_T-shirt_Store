import styles from './Header.module.css'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Header=()=>{
  let data = useSelector((state)=>state.cartData.currentCartData);
    return (
      <div className={styles.header}>
        <div>TeeRex Store</div>
        <div style={{position:'relative',display:'flex',alignItems:'center',marginRight:'30px'}}>
          <div style={{fontWeight:'bold',color:'black',paddingRight:'20px'}}>
            <Link to='/' style={{textDecoration:'none'}}>
              Products
            </Link>
          </div>
          <div style={{position:'relative'}}>
            <Link to="/CartPage">
              <i
                className="fa fa-shopping-cart"
                aria-hidden="true"
                style={{ fontSize: "25px", cursor: "pointer",color:'gray' }}
              >
              </i>
            </Link>
            <span style={{ position: "absolute", top: "-4px", fontSize:'12px', borderRadius:'50%',padding:'3px',backgroundColor:'gray',color:'white' }}>
                {data.length}
              </span>
          </div>
         </div>
      </div>
    );
}
export default Header