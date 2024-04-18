import Filter from "../Filter&Product Component/Filter";
import Product from "../Filter&Product Component/Product";

const ProductListing=()=>{
    return <div style={{display:'flex',justifyContent:'space-around',width:'100%',marginTop:'30px'}}>
        <Filter />
        <Product />
    </div>
}
 export default ProductListing;